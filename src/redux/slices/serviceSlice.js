import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// First, create the thunk
export const loadAllServices = createAsyncThunk('Services/allServices', async () => {
      const response = await fetch("http://localhost:5000/services")
        .then(res=>res.json())
        return response;
    }
  )

const serviceStates = {
    allService: [],
    loadingStatus: true,
    rejectedMessage: null
};
const serviceSlice = createSlice({
    name: "serviceState",
    initialState : serviceStates,
    reducers:{
        addAllService: (state, action) =>{
            state.allService.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadAllServices.pending, (state, action) => {
          state.loadingStatus = true;
        })
        builder.addCase(loadAllServices.fulfilled, (state, action) => {
          state.allService.push(action.payload);
          state.loadingStatus = false;
        })
        builder.addCase(loadAllServices.rejected, (state, action) => {
          state.loadingStatus = false;
          state.rejectedMessage = "Data loading rejected";
        })
      },
})

export const { addAllService } = serviceSlice.actions;

export default serviceSlice.reducer