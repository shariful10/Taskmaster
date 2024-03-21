import {
	CheckIcon,
	DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import TaskDetailsModal from "./TaskDetailsModal";
import { useSelector } from "react-redux";
// import { updateStatus } from "../../redux/features/tasks/tasksSlice";
import {
	useGetTasksQuery,
	useUpdateTaskMutation,
} from "../../redux/features/tasks/tasksApi";
import toast from "react-hot-toast";

const MyTasks = () => {
	// const dispatch = useDispatch();
	const [taskId, setTaskId] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	const { data: tasks } = useGetTasksQuery();
	const [updateTask] = useUpdateTaskMutation();
	const { name } = useSelector((state) => state.userSlice);
	const userSpecificTasks = tasks?.filter(
		(item) => item?.assignedTo === name && item.status !== "archive"
	);

	const handleUpdate = (id, updatedStatus) => {
		const data = {
			status: updatedStatus,
		};

		const options = {
			id: id,
			data: data,
		};

		updateTask(options);
		toast.success("Task is Completed now.");
	};

	const handleModal = (id) => {
		setTaskId(id);
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<TaskDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} id={taskId} />
			<h1 className="text-xl my-3">My Tasks</h1>
			<div className=" h-[750px] overflow-auto space-y-3">
				{userSpecificTasks?.map((item) => (
					<div
						key={item._id}
						className="bg-secondary/10 rounded-md p-3 flex justify-between"
					>
						<h1>{item.title}</h1>
						<div className="flex gap-3">
							<button
								onClick={() => handleModal(item._id)}
								className="grid place-content-center"
								title="Details"
							>
								<DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
							</button>
							<button
								onClick={() => handleUpdate(item._id, "done")}
								className="grid place-content-center"
								title="Done"
							>
								<CheckIcon className="w-5 h-5 text-primary" />
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyTasks;
