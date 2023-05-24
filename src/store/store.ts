import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";

const rootReducer = combineReducers<StateSchema>({
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        // Настраиваем middleware для санки
        thunk: {
            // Настраиваем extra-аргументы санки
            extraArgument: {
                // Делаем поле api и передаем как раз наш конфиг axios
                api: null // TODO
            }
        }
    })
});


export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];

