import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "movie",
    initialState: {
        auth: [],
    },
    reducers: {
        checkIfAuth: (state, action) => {
            state.auth.push(action.payload);
        },
    },
});

export const { checkIfAuth } = authSlice.actions;

export default authSlice.reducer;