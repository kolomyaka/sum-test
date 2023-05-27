export interface SignUpFormSchema {
    name?: string;
    username?: string;
    password?: string;
    repeatPassword?: string;

    isLoading: boolean;
    error?: string;
}