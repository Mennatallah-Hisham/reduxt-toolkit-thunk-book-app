import{ createSlice
} from "@reduxjs/toolkit";

const initialState={
    book:null
}
const bookSlice =createSlice({
    name:"book",
    initialState,
    reducers:{

    }
})

export const bookActions =bookSlice.actions;
export default bookSlice;
