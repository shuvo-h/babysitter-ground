import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// define async function to load dada from API 
export const loadBabysDay = createAsyncThunk("BabysDay/babysDayImg", async()=>{
    const response = await fetch("http://localhost:5000/babysday")
        .then(res=>res.json())
    return response;
})

// declare initial states 
const babysDay = {
    allBabysDay : [],
    loadingStatus: true,
    rejectedMessage: null
};

// create slice 
const babysDaySlice = createSlice({
    name: "BabysDay",
    initialState: babysDay,
    reducers:{
        addAllBabysDay: (state,action)=>{
            state.allBabysDay.push(action.payload)
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(loadBabysDay.pending, (state,action)=>{
            state.loadingStatus = true;
        })
        builder.addCase(loadBabysDay.fulfilled, (state,action)=>{
            state.allBabysDay = [...state.allBabysDay,action.payload]
            state.loadingStatus = false;
        })
        builder.addCase(loadBabysDay.rejected, (state,action)=>{
            state.rejectedMessage = "Data loading rejected";
        })
    }
})

export const {addAllBabysDay} = babysDaySlice.actions;
export default babysDaySlice.reducer
