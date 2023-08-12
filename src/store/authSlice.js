
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoggedIn:false,
    name:"menna hesham"

}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
       toggleLogin:(state,action)=>{
        state.isLoggedIn=!state.isLoggedIn
       }
    }
})
export const authAction = authSlice.actions;

export default authSlice;

