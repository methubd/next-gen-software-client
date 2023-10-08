import { configureStore } from "@reduxjs/toolkit";
import bannerCounter from "./features/bannerCounter/bannerCounterSlice";
import baseApi from "./features/api/baseApi";

const store = configureStore({
    reducer: {
        counter: bannerCounter,
        [baseApi.reducerPath] : baseApi.reducer,
    },
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
    
})

export default store;