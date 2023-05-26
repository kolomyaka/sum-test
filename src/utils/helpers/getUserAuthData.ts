import { responseUser } from "@/types/response";

export const getUserAuthData = (user: responseUser, username: string, password: string) => {
    return user.username === username && user.password === password;
};