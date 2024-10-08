import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : {
        users :[{
            username: "ram",
            email: "ramtanniru2@gmail.com",
            password:"123"
        }],
    },
    reducers : {
        addUser : (state,action) => {
            const data = action.payload;
            console.log(data);
            state.users.push(data);
        },
        removeUser : (state,action) => {
            state.users.length = 0
        }
    }
})

export const {addUser,getUser,removeUser} = userSlice.actions;

export default userSlice.reducer;