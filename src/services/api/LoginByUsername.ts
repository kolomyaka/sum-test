import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/store/StateSchema";
import { getUserAuthData } from "@/utils/helpers/getUserAuthData";
import { responseUser } from "@/types/response";
import { User } from "@/store/user";

interface loginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    loginByUsernameProps,
    ThunkConfig<string>
    >(
        "user/loginByUsername",
        async ({ username, password }, thunkAPI) => {
            const { extra, rejectWithValue } = thunkAPI;

            try {
                const response = await extra.api.get<responseUser[]>("/users");

                if (!response.data) {
                    throw new Error("Произошла ошибка, перезагрузите страницу");
                }

                const authorizedUser = response.data.find((item) => getUserAuthData(item, username, password));

                if (!authorizedUser) {
                    throw new Error("Имя пользователя или пароль введены не верно");
                }

                return {
                    username: authorizedUser.username,
                    name: authorizedUser.name
                };
            } catch (e) {
                return rejectWithValue(e.message);
            }
        }
    );