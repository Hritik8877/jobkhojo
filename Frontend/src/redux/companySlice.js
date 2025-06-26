import { createSlice } from "@reduxjs/toolkit";

const companySlice=createSlice({
    name:"company",
    initialState:{
        singleCompany:null,
        companies:[],
        searchcompany:""

    },
    reducers:{
        setsingleCompany:(state,action)=>{
            state.singleCompany=action.payload;
        },
        setcompanies:(state,action)=>{
            state.companies=action.payload
        },
        setsearchcompany:(state,action)=>{
            state.searchcompany=action.payload
        }
    }
})

export const {setsingleCompany,setcompanies,setsearchcompany}=companySlice.actions;
export default companySlice.reducer;