import { configureStore  } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import authSlice from "./authSlice";
import reportSlice from "./reportSlice";


const Store = configureStore({
    reducer:{
        "books":bookSlice.reducer,
        "auth":authSlice.reducer,
    "report":reportSlice.reducer,
    }
});
export default Store; 