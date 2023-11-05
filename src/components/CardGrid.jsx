import { useContext, useEffect } from "react";
import BinIcon from "../icons/BinIcon";
import CheckIcon from "../icons/CheckIcon";
import TasksContext from "../context/TasksContext";

const EventCard = ({ event, deleteTask, changeCompletedStatus }) => {
	return (
		<div className="flex flex-col justify-between  border-2 border-gray-200 rounded-md overflow-hidden px-3 pt-4 ">
			<div className="flex flex-col ">
				<div className="flex justify-between">
					<div className="font-['Syne'] font-bold text-lg pb-2.5 tracking-tight">
						{event.title}
					</div>
					<div
						className="flex flex-col justify-center p-1 hover:bg-gray-100 cursor-pointer"
						onClick={() => deleteTask(event.id)}
					>
						<BinIcon />
					</div>
				</div>
				<div className="text-sm font-medium text-gray-500 ">
					Due: {event.dueDate}
				</div>
				<div className="flex justify-between text-xs text-gray-500">
					<div>Project: {event.projectName}</div>
					<div
						className={`${
							event.priority === "low"
								? "bg-green-100 text-green-700"
								: event.priority === "medium"
								? "bg-blue-100 text-blue-700"
								: "bg-red-100 text-red-700"
						} px-2 py-0.5 rounded-sm capitalize font-medium `}
					>
						{event.priority}
					</div>
				</div>
				<div className="text-sm text-gray-600 pt-1.5 pb-2">
					{event.description}
				</div>
			</div>
			<div>
				<div className="border border-gray-200"></div>

				<button
					className={`${
						event.isComplete
							? "bg-black text-white border-black"
							: "text-black bg-white border-gray-200 "
					} w-full px-1.5 py-1.5 text-left flex gap-1.5 text-xs my-3 tracking-tight font-black border-2 transition-all duration-200 ease-in rounded-md`}
					onClick={() => changeCompletedStatus(event.id)}
				>
					<div className="flex flex-col justify-center">
						<CheckIcon />
					</div>
					<div>
						{event.isComplete ? "Completed" : "Mark as Complete"}
					</div>
				</button>
			</div>
		</div>
	);
};

const CardGrid = () => {
	const { tasks, deleteTasks, changeCompletedStatus } =
		useContext(TasksContext);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{tasks.map((event, index) => (
				<EventCard
					key={index}
					event={event}
					deleteTask={deleteTasks}
					changeCompletedStatus={changeCompletedStatus}
				/>
			))}
		</div>
	);
};

export default CardGrid;
