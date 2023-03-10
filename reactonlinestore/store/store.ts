import { combineReducers, configureStore } from "@reduxjs/toolkit";

import products from "./reducers/Products"

const rootReducer = combineReducers({
    products:products
});

export const setupStore = ()=>{
    return configureStore({
        reducer:rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];