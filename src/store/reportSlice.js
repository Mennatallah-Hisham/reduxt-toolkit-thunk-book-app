import { createSlice } from "@reduxjs/toolkit";


const initialState={
    logs:[]

}

const reportSlice= createSlice({
    name:"report",
    initialState,
    reducers:{
        logInsert:(state,action)=>{
            state.logs.push(action.payload)

        }

    }

});

export const reportActions = reportSlice.actions;
export default reportSlice;