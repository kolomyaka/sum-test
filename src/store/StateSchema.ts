import { AxiosInstance } from "axios";

export interface StateSchema {

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