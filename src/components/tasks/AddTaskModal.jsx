import { useForm } from "react-hook-form";
import Modal from "../ui/Model";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Dynamic Title">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col gap-3">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						className="w-full rounded-lg bg-transparent"
						{...register("name")}
					/>
				</div>
				<input type="submit" value="Submit" />
			</form>
		</Modal>
	);
};

export default AddTaskModal;
