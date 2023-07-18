import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from './features/QuestionsSlice'

export const store = configureStore({
    reducer:{
        questions : questionsReducer
    }
})