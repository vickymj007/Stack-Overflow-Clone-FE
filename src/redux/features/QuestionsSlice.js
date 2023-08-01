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
    },
    updateAnswer:(state,action)=>{
        let findQues = state.data.find(ques=> ques._id === action.payload.id)
        findQues.answers = [...findQues.answers,action.payload.answer]
        state.data.filter(question => question._id !== action.payload.id)
        state.data = [...state.data,findQues]
    },
    addViews:(state,action)=>{
        let findQues = state.data.find(ques=> ques._id === action.payload.id)
        findQues.views++
        state.data.filter(question => question._id !== action.payload.id)
        state.data = [...state.data,findQues]
    },
    changeVotes :(state, action)=>{
        let findQues = state.data.find(ques=> ques._id === action.payload.id)
        if(action.payload.type === "ques"){
            action.payload.inc ? findQues.votes++ : findQues.votes--
            state.data.filter(question => question._id !== action.payload.id)
            state.data = [...state.data,findQues]
        }else{
            findQues.answers.forEach(ans => {
                if(ans.unique_id === action.payload.ans_id){
                    action.payload.inc ? ans.votes++ : ans.votes--
                }
            });
            state.data.filter(question => question._id !== action.payload.id)
            state.data = [...state.data,findQues]
        } 
    }
   }

})
export const {
    setData, 
    addData, 
    changePage, 
    setContetntPerPage,
    updateAnswer,
    addViews,
    changeVotes
} = questionsSlice.actions
export default questionsSlice.reducer