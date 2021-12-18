import { createSlice } from "@reduxjs/toolkit";
const isMobileOpen = {
    isToggleOn: false,
    isAboutDpDn: false,
    isProfileDpDn: false,
    isScreenWidth: window.innerWidth
};

const navResponsiveSlice = createSlice({
    name: "isMobileOpen",
    initialState : isMobileOpen,
    reducers:{
        changeMobileOpen : (state) =>{
            state.isToggleOn = !state.isToggleOn;
        },
        changeAboutDpDn : (state) =>{
            state.isAboutDpDn = !state.isAboutDpDn;
        },
        changeProfileDpDn : (state) =>{
            state.isProfileDpDn = !state.isProfileDpDn;
        },
        changeWindowScreen: (state, action) =>{
            state.isScreenWidth = action.payload;
        }
    }
})

export const {changeMobileOpen,changeAboutDpDn, changeProfileDpDn, changeWindowScreen} = navResponsiveSlice.actions;

export default navResponsiveSlice.reducer