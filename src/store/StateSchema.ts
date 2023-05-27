import { AxiosInstance } from "axios";
import { UserSchema } from "@/store/user/UserSchema";
import { LoginFormSchema } from "@/store/LoginForm/LoginFormSchema";
import { SignUpFormSchema } from "@/store/SignUpForm";

export interface StateSchema {
    user: UserSchema;
    loginForm: LoginFormSchema;
    signUpForm: SignUpFormSchema;
}

// Типизируем поле extra у ThunkAPI
export interface ThunkExtraArg {
    api: AxiosInstance;
}

// Типизируем саму AsyncThunk
export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}