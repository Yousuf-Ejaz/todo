import CardGrid from "./components/CardGrid";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function App() {
	return (
		<div className="h-screen w-screen flex ">
			<Sidebar />
			<div className="grow flex flex-col w-10/12 ">
				<Navbar />
				<div className="overflow-y-auto max-h-[34rem] scrollbar-hide mt-4 px-6">
					<CardGrid />
				</div>
			</div>
		</div>
	);
}
