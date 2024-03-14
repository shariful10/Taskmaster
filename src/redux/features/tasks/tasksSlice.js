import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tasks: [],
};

const tasksSlice = createSlice({
	name: "tasksSlice",
	initialState,
	reducers: {
		addTask: (state, { payload }) => {
			if (state.tasks.length === 0) {
				state.tasks.push({ id: 1, status: "pending", ...payload });
			} else {
				const lastElemnt = state.tasks.at(-1);
				state.tasks.push({
					id: lastElemnt.id + 1,
					status: "pending",
					...payload,
				});
			}
		},
		removeTask: (state, { payload }) => {
			state.tasks.filter((item) => item.id !== payload);
		},
		updateStatus: (status, { payload }) => {
			const target = status.tasks.find((item) => item.id === payload.id);
			target.status = payload.status;
		},
	},
});

export const { addTask, removeTask, updateStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
