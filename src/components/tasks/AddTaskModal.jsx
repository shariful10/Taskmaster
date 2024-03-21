import Modal from "../ui/Modal";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { membersName } from "../../utils/data";
import { useAddTasksMutation } from "../../redux/features/tasks/tasksApi";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
	const { register, handleSubmit, reset } = useForm();

	const [addTask] = useAddTasksMutation();

	const onCancel = () => {
		reset();
		setIsOpen(false);
	};

	const onSubmit = (data) => {
		addTask({ ...data, status: "pending" });
		onCancel();
		toast.success("Task Added Successfully.");
	};

	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Dynamic Title">
			<form onSubmit={handleSubmit(onSubmit)} className="mt-2">
				<div className="flex flex-col mb-5">
					<label htmlFor="title" className="mb-2">
						Title
					</label>
					<input
						type="text"
						id="title"
						className="w-full rounded-md"
						{...register("title")}
					/>
				</div>
				<div className="flex flex-col mb-5">
					<label htmlFor="description" className="mb-2">
						Description
					</label>
					<textarea
						type="text"
						id="description"
						className="w-full rounded-md"
						{...register("description")}
					/>
				</div>
				<div className="flex flex-col mb-5">
					<label htmlFor="date" className="mb-2">
						Deadline
					</label>
					<input
						type="date"
						id="date"
						className="w-full rounded-md"
						{...register("date")}
					/>
				</div>
				<div className="flex flex-col mb-5">
					<label htmlFor="assignedTo" className="mb-2">
						Assign to
					</label>
					<select
						className="w-full rounded-md"
						id="assignedTo"
						{...register("assignedTo")}
					>
						{membersName.map(({ name }, idx) => (
							<option key={idx} value={name}>
								{name}
							</option>
						))}
					</select>
				</div>
				<div className="flex flex-col mb-5">
					<label htmlFor="priority" className="mb-2">
						Priority
					</label>
					<select
						className="w-full rounded-md"
						id="priority"
						{...register("priority")}
					>
						<option defaultValue value="high">
							High
						</option>
						<option value="medium">Medium</option>
						<option value="low">Low</option>
					</select>
				</div>
				<div className="flex justify-between items-center">
					<input
						type="button"
						value="Cancel"
						onClick={() => onCancel()}
						className="btn btn-danger cursor-pointer"
					/>
					<input
						type="submit"
						value="Submit"
						className="btn btn-primary cursor-pointer"
					/>
				</div>
			</form>
		</Modal>
	);
};

export default AddTaskModal;
