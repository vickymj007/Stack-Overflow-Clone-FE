import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name:"companies",
    initialState:{
        companies:null
    },
    reducers:{
        setCompanies:(state,action)=>{
            state.companies = action.payload
        }
    }
})

export const {setCompanies} = companySlice.actions
export default companySlice.reducer