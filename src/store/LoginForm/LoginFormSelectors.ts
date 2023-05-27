import { StateSchema } from "@/store/StateSchema";

export const getLoginFormUsername = (state: StateSchema) => state.loginForm.username;
export const getLoginFormPassword = (state: StateSchema) => state.loginForm.password;
export const getLoginFormError = (state: StateSchema) => state.loginForm.error;
export const getLoginFormIsLoading = (state: StateSchema) => state.loginForm.isLoading;