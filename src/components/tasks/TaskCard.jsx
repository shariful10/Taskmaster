import toast from "react-hot-toast";
import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useRemoveTaskMutation, useUpdateTaskMutation } from "../../redux/features/tasks/tasksApi";

const TaskCard = ({ task }) => {
	const [updateTask] = useUpdateTaskMutation();
  const [removeTask] = useRemoveTaskMutation();

	const handleUpdate = (id, updatedStatus) => {
		const data = {
			status: updatedStatus,
		};

		const options = {
			id: id,
			data: data,
		};

		updateTask(options);
		toast.success(
			`Task is ${
				task.status === "pending"
					? "In progress"
					: task.status === "running"
					? "Completed"
					: "Archived"
			} now.`
		);
	};

  const handleRemove = async (id) => {
    try {
      await removeTask(id);
      toast.success("Task removed successfully");
    } catch (error) {
      console.error("Error removing task:", error);
      toast.error("Failed to remove task");
    }
  };

	let updatedStatus;

	if (task.status === "pending") {
		updatedStatus = "running";
	} else if (task.status === "running") {
		updatedStatus = "done";
	} else {
		updatedStatus = "archive";
	}

	return (
		<div className="bg-secondary/10 rounded-md p-5">
			<h1
				className={`text-lg font-semibold mb-3 ${
					task.priority === "low"
						? "text-green-600"
						: task.priority === "medium"
						? "text-yellow-400"
						: "text-red-600"
				}`}
			>
				{task?.title}
			</h1>
			<p className="mb-3">{task?.description}</p>
			<p className="text-sm">Assigned to - {task?.assignedTo}</p>
			<div className="flex justify-between mt-3">
				<p>{task?.date}</p>
				<div className="flex gap-3">
					<button
						onClick={() => handleRemove(task._id)}
						title="Delete Task"
					>
						<TrashIcon className="h-5 w-5 text-red-500" />
					</button>
					<button
						onClick={() => handleUpdate(task._id, updatedStatus)}
						title="Update Status"
					>
						<ArrowRightIcon className="h-5 w-5 text-primary" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default TaskCard;
