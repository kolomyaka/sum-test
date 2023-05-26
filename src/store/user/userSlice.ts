import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserSchema } from "@/store/user/UserSchema";
import { loginByUsername } from "@/services/api/LoginByUsername";


const initialState: UserSchema = {
    isLoading: false
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(loginByUsername.fulfilled, (state, action: PayloadAction<User>) => {
                state.isLoading = false;
                state.authData = action.payload;
            })
            .addCase(loginByUsername.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});


export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;