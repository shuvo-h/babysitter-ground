import { createSlice } from "@reduxjs/toolkit";
const headerStates = {
    isParentChecked: null,
    isSitterChecked: null
};
const headerSlice = createSlice({
    name: "headerStates",
    initialState : headerStates,
    reducers:{
        changeParentChecked : (state) =>{
            state.isParentChecked = "checked";
            state.isSitterChecked = null;
        },
        changeSitterChecked: (state, action) =>{
            state.isParentChecked = null;
            state.isSitterChecked = "checked";
        }
    }
})

export const {changeParentChecked, changeSitterChecked} = headerSlice.actions;

export default headerSlice.reducer