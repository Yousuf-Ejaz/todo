import { useState } from "react";
import CardGrid from "./components/CardGrid";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { TasksProvider } from "./context/TasksContext";
import CloseIcon from "./icons/CloseIcon";
import Popup from "./components/Popup";

export default function App() {
	const [isPopupOpen, setPopupOpen] = useState(false);

	const closePopup = () => {
		setPopupOpen(false);
	};
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
						
					</div>
				</Popup>
			</div>
		</TasksProvider>
	);
}
