import { createSlice } from "@reduxjs/toolkit";

const gradebookSlice = createSlice({
    name: "gradebook",
    initialState: {
        movies: [],
    },
    reducers: {
        addGradebook: (state, action) => {
            state.gradebooks.push(action.payload);
        },
    },
});

export const { addGradebook } = gradebookSlice.actions;

export default gradebookSlice.reducer;