import { createSlice } from "@reduxjs/toolkit";

const jobSlice=createSlice({
    name:"job",
    initialState:{
        allJobs:[],
        singleJob:null,
        alladminjob:[],
        searchjobbytext:"",
    },
    reducers:{
        setAlljobs:((state,action)=>{
            state.allJobs=action.payload;
        }),
        setSingleJob:((state,action)=>{
            state.singleJob=action.payload
        }),
        setAlladminJob:((state,action)=>{
            state.alladminjob=action.payload
        }),

        setsearchjobbytext:((state,action)=>{
            state.searchjobbytext=action.payload
        })
    }
})

export const {setAlljobs,setSingleJob,setAlladminJob,setsearchjobbytext}=jobSlice.actions
export default jobSlice.reducer;