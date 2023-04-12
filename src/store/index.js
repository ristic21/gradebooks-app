import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;