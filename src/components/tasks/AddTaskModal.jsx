import { useForm } from "react-hook-form";
import Modal from "../ui/Model";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
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
						<option value="Sk Shariful Islam">Sk Shariful Islam</option>
						<option value="Mir Hossain">Mir Hossain</option>
						<option value="Nahid Hasan">Nahid Hasan</option>
						<option value="Mizanur Rahman">Mizanur Rahman</option>
						<option value="Tonmoy Parvez">Tonmoy Parvez</option>
						<option value="Fahim Ahmed">Fahim Ahmed</option>
						<option value="Rahatul Islam">Rahatul Islam</option>
						<option value="Samim Ravi">Samim Ravi</option>
						<option value="Mehedi Anik">Mehedi Anik</option>
						<option value="Ehtisam Hoque">Ehtisam Hoque</option>
						<option value="Muktadir Hasan">Muktadir Hasan</option>
						<option value="Anisur Rahman">Anisur Rahman</option>
						<option value="Masud Alam">Masud Alam</option>
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
						value="Cencel"
            onClick={() => setIsOpen(false)}
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
