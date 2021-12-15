import { createSlice } from "@reduxjs/toolkit";
const isMobileOpen = {
    isToggleOn: false,
    isScreenWidth: window.innerWidth
};
const navResponsiveSlice = createSlice({
    name: "isMobileOpen",
    initialState : isMobileOpen,
    reducers:{
        changeMobileOpen : (state) =>{
            state.isToggleOn = !state.isToggleOn;
        },
        changeWindowScreen: (state, action) =>{
            state.isScreenWidth = action.payload;
        }
    }
})

export const {changeMobileOpen, changeWindowScreen} = navResponsiveSlice.actions;

export default navResponsiveSlice.reducer