import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { reportActions } from "./reportSlice";

// htb2 2l action 2li h3mlo dispatch
// createAsyncThunk return gp of actions pending , fulfilled , rejected

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      // dispatch({type:"book/getbooks/pending"},payload:undefined)
      const response = await fetch("http://localhost:3005/books");

      const data = await response.json();
      return data;
      // dispatch({type:"book/getbooks/fulfilled",payload:data})
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
      //dispatch({type:"book/getbooks/rejected"},payload:error)
    }
  }
);

export const insertBook = createAsyncThunk(
  "book/insertBook",
  async (book, thunkAPI) => {
    const { rejectWithValue ,getState,dispatch} = thunkAPI;
    //getState() ==> obj {book:{},auth{}}
    book.userName=getState().auth.name;
  

    try {
      const response = await fetch("http://localhost:3005/books", {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
dispatch(reportActions.logInsert({name:"insertBook",status:"success"}));
      return data;
    } catch (err) {
      dispatch(reportActions.logInsert({name:"insertBook",status:"failed"}));
      return rejectWithValue(err.message);
    }
  }
);

export const deleteBook = createAsyncThunk("book/deleteBook",async(book,thunkAPI)=>{
  
  const {rejectWithValue}=thunkAPI;
  try{
    const response=fetch(`http://localhost:3005/books/${book.id}`,{
      method:'Delete'
    });
// mfesh response.json()asln
   // const data = response.json();
    return book;

  }catch(err){
    return rejectWithValue(err.message);
  }
});

const initialState = {
  bookList: [],
  isLoading: false,
  error: null,
};
const bookSlice = createSlice({
  name: "book",
  initialState,
 
  extraReducers: {
    //[getBooks.pending]  b2ol ll reducer t listen to this action
    //w lma y7sl  t execute 2l new action
    //getbooks
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;

      state.bookList = action.payload;
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;

      console.log(action);
    },
    //insertbook
    [insertBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
 
    },
    [insertBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
  
      state.bookList.push(action.payload);
    },
    [insertBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //delete
    [deleteBook.pending]:(state,action)=>{
     state.isLoading=true;
     state.error=null
    },
    [deleteBook.fulfilled]:(state,action)=>{
      state.isLoading=false;
      state.error=null;
      state.bookList=state.bookList.filter((book)=>book.id !== action.payload.id)

    }
    ,
    [deleteBook.rejected]:(state,action)=>{
      state.isLoading=false;
    state.error=action.payload;
    }
  },
});



export const bookActions = bookSlice.actions;
export default bookSlice;
