import { AxiosInstance } from "axios";
import { UserSchema } from "@/store/user/UserSchema";

export interface StateSchema {
    user: UserSchema
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