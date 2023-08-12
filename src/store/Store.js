import { configureStore  } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import authSlice from "./authSlice";


const Store = configureStore({
    reducer:{
        "books":bookSlice.reducer,
        "auth":authSlice.reducer,
    }
});
export default Store; 