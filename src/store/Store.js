import { configureStore  } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";


const Store = configureStore({
    reducer:{
        "books":bookSlice.reducer
    }
});
export default Store; 