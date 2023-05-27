import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginFormSchema } from "@/store/LoginForm/LoginFormSchema";
import { loginByUsername } from "@/services/api/LoginByUsername";

export type LoginFormFields = "username" | "password"

const initialState: LoginFormSchema = {
    isLoading: false,
};

interface LoginFormFieldProps {
    field: LoginFormFields;
    value: string;
}

export const loginFormSlice = createSlice({
    name: "loginForm",
    initialState,
    reducers: {
        setLoginFormField: (state, action: PayloadAction<LoginFormFieldProps>) => {
            state[action.payload.field] = action.payload.value;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});


export const { actions: loginFormActions } = loginFormSlice;
export const { reducer: loginFormReducer } = loginFormSlice;