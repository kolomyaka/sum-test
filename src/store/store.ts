import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { userReducer } from "@/store/user/userSlice";
import { $api } from "@/services/api/config/api";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loginFormReducer } from "@/store/LoginForm/loginFormSlice";
import { signUpFormReducer } from "@/store/SignUpForm";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"]
};

const rootReducer = combineReducers<StateSchema>({
    user: userReducer,
    loginForm: loginFormReducer,
    signUpForm: signUpFormReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
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

export const persistor = persistStore(store);

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];

