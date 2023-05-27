import { StateSchema } from "@/store/StateSchema";

export const getSignUpFormError = (state: StateSchema) => state.signUpForm.error;
export const getSignUpFormUsername = (state: StateSchema) => state.signUpForm.username;
export const getSignUpFormName = (state: StateSchema) => state.signUpForm.name;
export const getSignUpFormPassword = (state: StateSchema) => state.signUpForm.password;
export const getSignUpFormRepeatPassword = (state: StateSchema) => state.signUpForm.repeatPassword;