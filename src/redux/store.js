import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from './features/QuestionsSlice'
import userReducer from './features/userSlice'
import allUserReducer from './features/allUserSlice'

export const store = configureStore({
    reducer:{
        questions : questionsReducer,
        user:userReducer,
        allUsers : allUserReducer
    }
})