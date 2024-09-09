import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { postsReducer } from "./postSlice";

export let store = configureStore({
    reducer: {
        authReducer,
        postsReducer
        // waiting for the reducer
    }
})


export type storeDispatch = typeof store.dispatch;
export type storeState = ReturnType<typeof store.getState>;
