import { createSlice } from "@reduxjs/toolkit";

const questionsSlice= createSlice({
    name:'questions',
    initialState:{
        data:null,
        currentPage:0,
        contentPerPage:5
    },
   reducers:{
    setData:(state,action)=>{
        state.data = action.payload;
    },
    addData:(state,action)=>{
        state.data = [...state.data, action.payload]
    },
    changePage : (state,action)=>{
        state.currentPage = action.payload
    },
    setContetntPerPage:(state,action)=>{
        state.contentPerPage = action.payload
    }
   }

})
export const {setData, addData, changePage, setContetntPerPage} = questionsSlice.actions
export default questionsSlice.reducer