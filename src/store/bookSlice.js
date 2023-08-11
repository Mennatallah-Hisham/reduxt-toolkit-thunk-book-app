import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// htb2 2l action 2li h3mlo dispatch
// createAsyncThunk return gp of actions pending , fulfilled , rejected

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    try {
      // dispatch({type:"book/getbooks/pending"},payload:undefined)
      const response = await fetch("http://localhost:3005/books");
      if(!response.ok)throw new Error("lost connection")
      const data = await response.json();
      return data;
      // dispatch({type:"book/getbooks/fulfilled",payload:data})
    } catch (err) {
      console.log(err);
      //dispatch({type:"book/getbooks/rejected"},payload:error)
    }
  }
);

const initialState = {
  bookList: [],
  isLoading: false,
};
const bookSlice = createSlice({
  name: "book",
  initialState,
  extraReducers: {
    //[getBooks.pending]  b2ol ll reducer t listen to this action
    //w lma y7sl  t execute 2l new action
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.bookList = action.payload;
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;

      console.log(action);
    },
  },
});

export const bookActions = bookSlice.actions;
export default bookSlice;
