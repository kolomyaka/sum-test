import { StateSchema } from "@/store/StateSchema";

export const getUserName = (state: StateSchema) => state.user.authData?.name ?? "";
export const getUserUsername = (state: StateSchema) => state.user.authData?.username ?? "";
export const getUserAuthData = (state: StateSchema) => state.user.authData;
export const getUserError = (state: StateSchema) => state.user.error;