import { createSlice } from "@reduxjs/toolkit";
import { UserSchema } from "@/store/user/UserSchema";


const initialState: UserSchema = {
    error: undefined,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },

});


export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;