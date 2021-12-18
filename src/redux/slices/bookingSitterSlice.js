import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// First, create the thunk for loading all booking info for specifiq parent
export const loadBookings = createAsyncThunk('bookings/booking', async (email) => {
    const response = await fetch("https://sheltered-temple-15299.herokuapp.com/booking-list",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({email})
    })
      .then(res=>res.json())
      return response;
  }
)

// declare the initial state
const bookingStates = {
    bookingInfo: {},
    myBooking: {
        myPrevBooking: [],
        loadingStatus: true,
        rejectedMessage: null
    },
};
const bookingSlice = createSlice({
    name: "bookingState",
    initialState : bookingStates,
    reducers:{
        // set all booking info 
        setBookingInfo: (state, action) =>{
            state.bookingInfo =  action.payload;
        },
        // add email to booking state
        setEmailToBState: (state, action) =>{
            state.bookingInfo.email = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadBookings.pending, (state, action) => {
          state.myBooking.loadingStatus = true;
        })
        builder.addCase(loadBookings.fulfilled, (state, action) => {
          state.myBooking.myPrevBooking = action.payload;
          state.myBooking.loadingStatus = false;
        })
        builder.addCase(loadBookings.rejected, (state, action) => {
          state.myBooking.loadingStatus = false;
          state.myBooking.rejectedMessage = "Data loading rejected";
        })
      },
})

export const {setBookingInfo, setEmailToBState} = bookingSlice.actions;

export default bookingSlice.reducer