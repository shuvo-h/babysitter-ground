import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// create the thunk for loading parents all data
export const loadAllParents = createAsyncThunk('dashboard/allParents', async () => {
      const response = await fetch("http://localhost:5000/parents")
        .then(res=>res.json())
        return response;
    }
  )
// create the thunk for loading sitters all data
export const loadAllSitters = createAsyncThunk('dashboard/allSitters', async () => {
      const response = await fetch("http://localhost:5000/allSitters")
        .then(res=>res.json())
        return response;
    }
  )
// create the thunk for loading services all data
export const loadAllServices = createAsyncThunk('dashboard/allServices', async () => {
      const response = await fetch("http://localhost:5000/services")
        .then(res=>res.json())
        return response;
    }
  )

const dashboardStates = {
    parents: {
        allParents: [],
        parentsLoadStatus: true,
        rejectedMsg: null
    },
    sitters: {
        allSitters: [],
        sittersLoadStatus: true,
        rejectedMsg: null
    },
    services: {
        allServices: [],
        servicesLoadStatus: true,
        rejectedMsg: null
    },
};
const dashboardSlice = createSlice({
    name: "dashboardState",
    initialState : dashboardStates,
    reducers:{
      // get all parents 
        getAllParents: (state, action) =>{
            state.parents.allParents = action.payload;
        },
        // delete a single parent based on id 
        updateDeleteParent: (state, action) =>{  //update methos is not working, fix it later
            state.parents.allParents[0].filter(parent=>parent._id !== action.payload)
        },
        // get all sitter 
        getAllSitters: (state, action) =>{
            state.sitters.allSitters = action.payload;
        },
        // delete a single sitter based on id 
        updateDeleteSitter: (state, action) =>{  //update methos is not working, fix it later
            state.sitters.allSitters[0].filter(sitter=>sitter._id !== action.payload)
        },
        // get all services 
        getAllServices: (state, action) =>{
            state.services.allServices = action.payload;
        },
        // delete a single sitter based on id 
        updateDeleteSservice: (state, action) =>{  //update methos is not working, fix it later
            state.services.allServices[0].filter(service=>service._id !== action.payload)
        },
    },
    extraReducers: (builder) => {
        // wait for parents fetch data to initial state
        builder.addCase(loadAllParents.pending, (state, action) => {
          state.parents.parentsLoadStatus = true;
        })
        // add parents fetch data to initial state
        builder.addCase(loadAllParents.fulfilled, (state, action) => {
          state.parents.allParents.push(action.payload);
          state.parents.parentsLoadStatus = false;
        })
        // reject status parents fetch data to initial state
        builder.addCase(loadAllParents.rejected, (state, action) => {
          state.parents.parentsLoadStatus = false;
          state.parents.rejectedMessage = "Data loading rejected";
        })

        // wait for sitters fetch data to initial state
        builder.addCase(loadAllSitters.pending, (state, action) => {
          state.sitters.sittersLoadStatus = true;
        })
        // add sitters fetch data to initial state
        builder.addCase(loadAllSitters.fulfilled, (state, action) => {
          state.sitters.allSitters.push(action.payload);
          state.sitters.sittersLoadStatus = false;
        })
        // reject status sitters fetch data to initial state
        builder.addCase(loadAllSitters.rejected, (state, action) => {
          state.sitters.sittersLoadStatus = false;
          state.sitters.rejectedMessage = "Data loading rejected";
        })

        // wait for services fetch data to initial state
        builder.addCase(loadAllServices.pending, (state, action) => {
          state.services.servicesLoadStatus = true;
        })
        // add services fetch data to initial state
        builder.addCase(loadAllServices.fulfilled, (state, action) => {
          state.services.allServices.push(action.payload);
          state.services.servicesLoadStatus = false;
        })
        // reject status services fetch data to initial state
        builder.addCase(loadAllServices.rejected, (state, action) => {
          state.services.servicesLoadStatus = false;
          state.services.rejectedMessage = "Data loading rejected";
        })
      },
})

export const { getAllParents, updateDeleteParent,getAllSitters, updateDeleteSitter,getAllServices,updateDeleteSservice } = dashboardSlice.actions;

export default dashboardSlice.reducer