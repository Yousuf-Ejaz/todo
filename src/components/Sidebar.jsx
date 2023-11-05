import { useContext, useEffect, useState } from "react";
import AddCircle from "../icons/AddCircle";
import AddIcon from "../icons/AddIcon";
import BulletIcon from "../icons/BulletIcon";
import MinusIcon from "../icons/MinusIcon";
import PriorityIcon from "../icons/PriorityIcon";
import RightArrow from "../icons/RightArrow";
import TasksIcon from "../icons/TasksIcon";
import UpcomingIcon from "../icons/UpcomingIcon";
import useFilter from "../hooks/useFilter";
import TasksContext from "../context/TasksContext";

function Sidebar({ openPopup }) {
	const [selectedOption, setSelectedOption] = useState("All Tasks");
	const [projectName, setProjectName] = useState("");
	const { filterParams, setFilterParams } = useContext(TasksContext);

	useEffect(() => {
		useFilter(
			selectedOption,
			projectName,
			undefined,
			filterParams,
			setFilterParams
		);
	}, [selectedOption, projectName]);
	return (
		<div className="hidden lg:w-2/12 border-r-2 border-gray-150 pl-6 pr-4 py-9 lg:flex flex-col justify-between ">
			<div>
				<div className="flex justify-between">
					<h1 className="text-4xl font-['Syne'] font-black tracking-tighter">
						todo.
					</h1>
					<div className="flex flex-col justify-center">
						<div className="flex flex-col justify-center p-1 border-box h-fit rounded-full transition-all hover:bg-gray-100 duration-300 ease-in-out">
							<MinusIcon />
						</div>
					</div>
				</div>
				<ul className="mt-6 text-base">
					<li
						className={`${
							selectedOption === "All Tasks"
								? "bg-gray-200 hover:bg-gray-200"
								: ""
						} p-2 mt-1.5 hover:bg-gray-100 duration-300 ease-in-out rounded-md flex gap-4 cursor-pointer`}
						onClick={() => setSelectedOption("All Tasks")}
					>
						<div className="flex flex-col justify-center">
							<TasksIcon />
						</div>
						<div className="font-medium text-gray-900 ">
							All Tasks
						</div>
					</li>
					<li
						className={`${
							selectedOption === "Due Today"
								? "bg-gray-200 hover:bg-gray-200"
								: ""
						} p-2 mt-1.5 hover:bg-gray-100 duration-300 ease-in-out rounded-md flex gap-4 cursor-pointer`}
						onClick={() => setSelectedOption("Due Today")}
					>
						<div className="flex flex-col justify-center">
							<UpcomingIcon />
						</div>
						<div className="font-medium text-gray-900 ">
							Due Today
						</div>
					</li>
					<li
						className={`${
							selectedOption === "High Priority"
								? "bg-gray-200 hover:bg-gray-200"
								: ""
						} p-2 mt-1.5 hover:bg-gray-100 duration-300 ease-in-out rounded-md flex gap-4 cursor-pointer`}
						onClick={() => setSelectedOption("High Priority")}
					>
						<div className="flex flex-col justify-center">
							<PriorityIcon />
						</div>
						<div className="font-medium text-gray-900 ">
							High Priority
						</div>
					</li>
				</ul>
			</div>
			<div>
				<div className="flex flex-col text-xs gap-1 font-medium border-2 rounded-md px-2 py-3">
					<div
						className="flex justify-between w-full font-medium mb-1 cursor-pointer"
						onClick={() => setProjectName("")}
					>
						<div className="px-1.5 text-sm">Projects</div>
						<div className="flex flex-col justify-center p-1.5 cursor-pointer border-box h-fit rounded-full transition-all hover:bg-gray-100 duration-300 ease-in-out">
							<AddCircle />
						</div>
					</div>
					<div className="flex flex-col gap-1 h-24 overflow-auto ">
						<div
							className={`${
								projectName === "Design Systems"
									? "bg-gray-200 hover:bg-gray-200"
									: ""
							} flex justify-between p-1.5 hover:bg-gray-100 cursor-pointer`}
							onClick={() => setProjectName("Design Systems")}
						>
							<div className="flex justify-start gap-1.5">
								<div className="flex flex-col justify-center">
									<BulletIcon />
								</div>
								<div>Design Systems</div>
							</div>
							<div className="flex flex-col justify-center text-gray-400 ">
								<RightArrow />
							</div>
						</div>
						<div
							className={`${
								projectName === "Icon Pack Update"
									? "bg-gray-200 hover:bg-gray-200"
									: ""
							} flex justify-between p-1.5 hover:bg-gray-100 cursor-pointer`}
							onClick={() => setProjectName("Icon Pack Update")}
						>
							<div className="flex justify-start gap-1.5">
								<div className="flex flex-col justify-center">
									<BulletIcon />
								</div>
								<div>Icon Pack Update</div>
							</div>
							<div className="flex flex-col justify-center text-gray-400 ">
								<RightArrow />
							</div>
						</div>
						<div
							className={`${
								projectName === "Website Redesign"
									? "bg-gray-200 hover:bg-gray-200"
									: ""
							} flex justify-between p-1.5 hover:bg-gray-100 cursor-pointer`}
							onClick={() => setProjectName("Website Redesign")}
						>
							<div className="flex justify-start gap-1.5">
								<div className="flex flex-col justify-center">
									<BulletIcon />
								</div>
								<div>Website Redesign</div>
							</div>
							<div className="flex flex-col justify-center text-gray-400 ">
								<RightArrow />
							</div>
						</div>
					</div>
				</div>
				<button
					className="bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all duration-300 ease-in-out w-full text-center py-2 px-4 rounded-md font-medium flex justify-center gap-1 mt-16 "
					onClick={() => openPopup(true)}
				>
					<div className="flex flex-col justify-center h-full p-0.5">
						<div className="flex flex-col justify-center">
							<AddIcon />
						</div>
					</div>
					<div>Add New Task</div>
				</button>
			</div>
		</div>
	);
}
export default Sidebar;
