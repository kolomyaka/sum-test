import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { userReducer } from "@/store/user/userSlice";
import { $api } from "@/services/api/config/api";

const rootReducer = combineReducers<StateSchema>({
    user: userReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        // Настраиваем middleware для санки
        thunk: {
            // Настраиваем extra-аргументы санки
            extraArgument: {
                // Делаем поле api и передаем как раз наш конфиг axios
                api: $api
            }
        }
    })
});


export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];

