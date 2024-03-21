import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tasks: [
		{
			id: 1,
			status: "pending",
			title: "Task 1",
			description:
				"We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
			date: "2023-08-28",
			assignedTo: "Shariful Islam",
			priority: "high",
		},
	],
	userSpecificTasks: [],
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
			state.tasks = state.tasks.filter((item) => item.id !== payload);
		},
		updateStatus: (status, { payload }) => {
			const target = status.tasks.find((item) => item.id === payload.id);
			target.status = payload.status;
		},
		userTasks: (state, { payload }) => {
			state.userSpecificTasks = state.tasks.filter(
				(item) => item.assignedTo === payload
			);
		},
	},
});

export const { addTask, removeTask, updateStatus, userTasks } =
	tasksSlice.actions;

export default tasksSlice.reducer;
