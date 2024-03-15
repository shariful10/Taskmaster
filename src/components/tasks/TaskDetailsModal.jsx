import Modal from "../ui/Modal";
import { useSelector } from "react-redux";

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {
	const { tasks } = useSelector((state) => state.tasksSlice);
	const task = tasks.find((item) => item.id === id);

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
