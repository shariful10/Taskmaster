import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/users/usersSlice";
import tasksSlice from "./features/tasks/tasksSlice";

const store = configureStore({
	reducer: {
		userSlice: userSlice,
		tasksSlice: tasksSlice,
	},
});

export default store;
