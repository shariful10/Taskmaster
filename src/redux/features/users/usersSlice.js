import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "Sk Shariful Islam",
	email: "shariful@gmail.com",
	userTasks: [],
};

const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {},
});

export const { addTask, removeTask, updateStatus } = userSlice.actions;

export default userSlice.reducer;
