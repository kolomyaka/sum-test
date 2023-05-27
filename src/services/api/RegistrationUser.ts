import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/store/StateSchema";
import { getUserAuthData } from "@/utils/helpers/getUserAuthData";
import { responseUser } from "@/types/response";
import { userActions } from "@/store/user";

interface RegistrationUserProps {
    username: string;
    name: string;
    password: string;
    repeatPassword: string;
}

export const RegistrationUser = createAsyncThunk<
    void,
    RegistrationUserProps,
    ThunkConfig<string>
    >(
        "signUpForm/RegistrationUser",
        async ({ username, password, repeatPassword, name }, thunkAPI) => {
            const { extra, rejectWithValue, dispatch } = thunkAPI;

            try {
                if (password !== repeatPassword) {
                    throw new Error("Введенные пароли не совпадают");
                }

                const response = await extra.api.get<responseUser[]>("/users");

                if (!response.data) {
                    throw new Error("Произошла ошибка, перезагрузите страницу");
                }

                const existingUser = response.data.find((item) => getUserAuthData(item, username, password));

                if (existingUser) {
                    throw new Error("Пользователь с таким логином уже зарегистрирован");
                }

                dispatch(userActions.setAuthData({ username, name }));
            } catch (e) {
                return rejectWithValue(e.message);
            }
        }
    );