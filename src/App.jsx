import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function App() {
	return (
		<div className="h-screen w-screen flex ">
			<Sidebar />
			<div className="grow flex flex-col">
				<Navbar />
			</div>
		</div>
	);
}
