export interface User {
    username: string;
    name: string;
}

export interface UserSchema {
    authData?: User
    error?: string | undefined;
    isLoading: boolean;
}