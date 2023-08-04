import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from './features/QuestionsSlice'
import userReducer from './features/userSlice'
import allUserReducer from './features/allUserSlice'
import companiesReducer from './features/companySlice'

export const store = configureStore({
    reducer:{
        questions : questionsReducer,
        user:userReducer,
        allUsers : allUserReducer,
        companies: companiesReducer
    }
})