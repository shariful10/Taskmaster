import baseApi from "../api/baseApi";

const taskApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getTasks: builder.query({
			query: () => "/tasks",
			providesTags: ["Tasks"],
		}),
		updateTask: builder.mutation({
			query: ({ id, data }) => ({
				url: `/tasks/${id}`,
				method: "PATCH",
				body: data,
			}),
			invalidatesTags: ["Tasks"],
		}),
		addTasks: builder.mutation({
			query: (task) => ({
				url: "/tasks",
				method: "POST",
				body: task,
			}),
			invalidatesTags: ["Tasks"],
		}),
		removeTask: builder.mutation({
			query: (id) => ({
				url: `/tasks/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Tasks"],
		}),
	}),
});

export const {
	useGetTasksQuery,
	useUpdateTaskMutation,
	useAddTasksMutation,
	useRemoveTaskMutation,
} = taskApi;
