import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// htb2 2l action 2li h3mlo dispatch
// createAsyncThunk return gp of actions pending , fulfilled , rejected

export const getBooks = createAsyncThunk("book/getBooks", async (_,thunkAPI) => {
    try{
        // dispatch({type:"book/getbooks/pending"},payload:undefined)
        const response = await fetch("http://localhost:3005/books");
        const data = await response.json();
        return data;
        // dispatch({type:"book/getbooks/fulfilled",payload:data})



    }catch(err){
        console.log(err);
        //dispatch({type:"book/getbooks/rejected"},payload:error)

    }


});


const initialState = {
  books: null,
};
const bookSlice = createSlice({
  name: "book",
  initialState,
  extraReducers: {

    
    [getBooks.pending]:(state,action)=>{
        console.log(action);

    },
    [getBooks.fulfilled]:(state,action)=>{
        console.log(action);

    },
    [getBooks.rejected]:(state,action)=>{
        console.log(action);

    }
     
  },
});

export const bookActions = bookSlice.actions;
export default bookSlice;
