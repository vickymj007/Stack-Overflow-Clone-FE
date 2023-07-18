import { createSlice } from "@reduxjs/toolkit";
import {data} from '../../components/Main/Questions/data'

const questionsSlice= createSlice({
    name:'questions',
    initialState:{
        data,
        currentPage:0,
        contentPerPage:5
    },
   reducers:{
    changePage : (state,action)=>{
        state.currentPage = action.payload
    },
    setContetntPerPage:(state,action)=>{
        state.contentPerPage = action.payload
    }
   }

})
export const {changePage, setContetntPerPage} = questionsSlice.actions
export default questionsSlice.reducer