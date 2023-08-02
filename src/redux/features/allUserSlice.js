import { createSlice } from "@reduxjs/toolkit";


const allUserSlice = createSlice({
    name:'allUsers',
    initialState:{
        users:null,
    },
    reducers:{
        setUsers:(state,action)=>{
            state.users = action.payload
        }
    }
})

export const {setUsers} = allUserSlice.actions
export default allUserSlice.reducer