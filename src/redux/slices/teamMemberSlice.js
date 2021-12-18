import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// create the thunk
export const loadTeamMembers = createAsyncThunk('Team/teamMembers', async () => {
      const response = await fetch("https://sheltered-temple-15299.herokuapp.com/teamMembers")
        .then(res=>res.json())
        return response;
    }
  )
    // initialize the initialize state 
const teamMemberStates = {
    members: [],
    loadingStatus: true,
    rejectedMessage: null
};

// create the slice from toolkit method
const teamMemberSlice = createSlice({
    name: "teamMembers",
    initialState : teamMemberStates,
    reducers:{
        addTeamMembers: (state, action) =>{
            state.members = action.payload
        }
    },
    // add the extra reducer to add the fetched data to initial state 
    extraReducers: (builder) => {
        builder.addCase(loadTeamMembers.pending, (state, action) => {
          state.loadingStatus = true;
        })
        builder.addCase(loadTeamMembers.fulfilled, (state, action) => {
          state.members.push(action.payload);
          state.loadingStatus = false;
        })
        builder.addCase(loadTeamMembers.rejected, (state, action) => {
          state.loadingStatus = false;
          state.rejectedMessage = "Data loading rejected";
        })
      },
})

export const { addTeamMembers } = teamMemberSlice.actions;

export default teamMemberSlice.reducer