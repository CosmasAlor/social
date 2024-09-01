import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";

export let store = configureStore({
    reducer: {
        authReducer
        // waiting for the reducer
    }
})


export type storeDispatch = typeof store.dispatch;
export type storeState = ReturnType<typeof store.getState>;
