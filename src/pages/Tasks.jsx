import { useState } from "react";
import { images } from "../utils/data";
import MyTasks from "../components/tasks/MyTasks";
import TaskCard from "../components/tasks/TaskCard";
import MenuDropdown from "../components/ui/MenuDropdown";
import AddTaskModal from "../components/tasks/AddTaskModal";
import { useGetTasksQuery } from "../redux/features/tasks/tasksApi";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Tasks = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { data: tasks } = useGetTasksQuery();

	const pendingTasks = tasks?.filter((item) => item?.status === "pending");
	const runningTasks = tasks?.filter((item) => item?.status === "running");
	const doneTasks = tasks?.filter((item) => item?.status === "done");

	return (
		<div className="h-screen grid grid-cols-12">
			<div className="col-span-9 px-10 pt-10">
				<div className="flex justify-between items-center">
					<div>
						<h1 className="font-semibold text-3xl">Tasks</h1>
					</div>
					<div className="flex gap-5">
						<button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-md h-10 w-10  grid place-content-center text-secondary hover:text-white transition-all">
							<MagnifyingGlassIcon className="h-6 w-6" />
						</button>
						<button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-md h-10 w-10 grid place-content-center text-secondary hover:text-white transition-all">
							<BellIcon className="h-6 w-6" />
						</button>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="btn btn-primary"
						>
							Add Task
						</button>
						<MenuDropdown>
							<div className="h-10 w-10 rounded-full overflow-hidden">
								<img
									src="https://i.ibb.co/Qdt6ZXQ/Shariful.jpg"
									alt=""
									className="object-cover h-full w-full "
								/>
							</div>
						</MenuDropdown>
						<AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen} />
					</div>
				</div>
				<div className="grid grid-cols-3 gap-5 mt-10">
					<div className="relative pb-5">
						<div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
							<h1>Up Next</h1>
							<p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
								{pendingTasks?.length}
							</p>
						</div>
						<div className="space-y-3">
							{pendingTasks?.map((item) => (
								<TaskCard key={item._id} task={item} />
							))}
						</div>
					</div>
					<div className="relative pb-5">
						<div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
							<h1>In Progress</h1>
							<p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
								{runningTasks?.length}
							</p>
						</div>
						<div className="space-y-3">
							{runningTasks?.map((item) => (
								<TaskCard key={item._id} task={item} />
							))}
						</div>
					</div>
					<div className="relative pb-5">
						<div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
							<h1>Completed</h1>
							<p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
								{doneTasks?.length}
							</p>
						</div>
						<div className="space-y-3">
							{doneTasks?.map((item) => (
								<TaskCard key={item._id} task={item} />
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="col-span-3 border-l-2 border-secondary/20 px-10 pt-10">
				<div>
					<h1 className="text-xl">Members</h1>
					<div className="flex gap-3 mt-3">
						{images.map(({ img }, idx) => (
							<div key={idx} className="h-10 w-10 rounded-full overflow-hidden">
								<img src={img} alt="" className="object-cover h-full w-full" />
							</div>
						))}
					</div>
				</div>
				<MyTasks />
			</div>
		</div>
	);
};

export default Tasks;
