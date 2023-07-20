import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
        login:(state,action)=>{
            state.user = action.payload
        },
        logOut:(state)=>{
            state.user = null
        }
    }
})

export const {login,logOut} = userSlice.actions

export default userSlice.reducer