import baseApi from "./features/api/baseApi";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/users/usersSlice";
import tasksSlice from "./features/tasks/tasksSlice";

const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		userSlice: userSlice,
		tasksSlice: tasksSlice,
	},
  middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
