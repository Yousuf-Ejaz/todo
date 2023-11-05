import { useState } from "react";
import CardGrid from "./components/CardGrid";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { TasksProvider } from "./context/TasksContext";
import CloseIcon from "./icons/CloseIcon";
import Popup from "./components/Popup";
import schema from "./schema.json";
import uischema from "./uischema.json";
import { JsonForms } from "@jsonforms/react";
import {
	materialCells,
	materialRenderers,
} from "@jsonforms/material-renderers";
import RainbowDatepicker from "./components/DatePicker";
import DatePickerControl from "./components/DatePickerControl";
import rankWith from "./components/DatePickerTester";
import AddIcon from "./icons/AddIcon";

const initialData = {
	title: "Enter Title",
	description: "Describe the task...",
	due_date: null,
	priority: "Low",
	project: "Independent",
};

const renderers = [
	...materialRenderers,

	{ tester: rankWith, renderer: DatePickerControl },
];
export default function App() {
	const [isPopupOpen, setPopupOpen] = useState(false);

	const closePopup = () => {
		setPopupOpen(false);
	};
	const [data, setData] = useState(initialData);
	return (
		<TasksProvider>
			<div className="h-screen w-screen flex ">
				<Sidebar openPopup={setPopupOpen} />
				<div className="grow flex flex-col w-10/12 ">
					<Navbar />
					<div className="overflow-y-auto max-h-[34rem] scrollbar-hide mt-4 px-6">
						<CardGrid />
					</div>
				</div>
				<Popup isOpen={isPopupOpen} onClose={closePopup}>
					<div className="">
						<div className="flex justify-between gap-12">
							<div className="flex flex-col justify-center">
								<h2 className="text-2xl font-bold  uppercase tracking-tight">
									add a task
								</h2>
							</div>
							<div
								className=" text-right hover:bg-gray-100 rounded-full p-1.5 cursor-pointer"
								onClick={closePopup}
							>
								<div className="flex flex-col justify-center">
									<CloseIcon />
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-1 mt-8">
							<JsonForms
								schema={schema}
								uischema={uischema}
								data={data}
								renderers={renderers}
								cells={materialCells}
								onChange={({ errors, data }) => setData(data)}
							/>
						</div>
						<button
							className="bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all duration-300 ease-in-out w-full text-center py-2 px-4 rounded-md font-medium flex justify-center gap-1 mt-6 "
							onClick={() => openPopup(true)}
						>
							<div className="flex flex-col justify-center h-full p-0.5">
								<div className="flex flex-col justify-center">
									<AddIcon	 />
								</div>
							</div>
							<div>Add New Task</div>
						</button>
					</div>
				</Popup>
			</div>
		</TasksProvider>
	);
}
