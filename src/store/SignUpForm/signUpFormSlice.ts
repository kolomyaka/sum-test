import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignUpFormSchema } from "./SignUpFormSchema";
import { RegistrationUser } from "@/services/api/RegistrationUser";

export type SignUpFormFields = "username" | "password" | "repeatPassword"

const initialState: SignUpFormSchema = {
    isLoading: false,
};

interface SignUpFormProps {
    field: SignUpFormFields;
    value: string;
}

export const signUpFormSlice = createSlice({
    name: "loginForm",
    initialState,
    reducers: {
        setSignUpFormFields: (state, action: PayloadAction<SignUpFormProps>) => {
            state[action.payload.field] = action.payload.value;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(RegistrationUser.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(RegistrationUser.fulfilled, (state) => {
                state.isLoading = true;
            })
            .addCase(RegistrationUser.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = true;
                state.error = action.payload;
            });
    },
});


export const { actions: signUpFormActions } = signUpFormSlice;
export const { reducer: signUpFormReducer } = signUpFormSlice;