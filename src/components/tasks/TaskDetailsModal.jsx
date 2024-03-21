import Modal from "../ui/Modal";
import { useGetTasksQuery } from "../../redux/features/tasks/tasksApi";

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {
  const { data: tasks } = useGetTasksQuery();
	const task = tasks?.find((item) => item._id === id);

	return (
		<Modal
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			title={task?.title}
			showClose={true}
		>
			{task?.description}
		</Modal>
	);
};

export default TaskDetailsModal;
