import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoApi2 } from "../services/cryptoApi2";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
export default configureStore({
    reducer: {
        [cryptoApi.reducerPath] : cryptoApi.reducer,
        [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer,
        [cryptoApi2.reducerPath] : cryptoApi2.reducer,
    },
})