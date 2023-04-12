import { createSlice } from "@reduxjs/toolkit";

const studentsSlice = createSlice({
    name: "student",
    initialState: {
        students: [],
    },
    reducers: {
        addStudent: (state, action) => {
            state.students.push(action.payload);
        },
    },
});

export const { addStudent } = studentsSlice.actions;

export default studentsSlice.reducer;