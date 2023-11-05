import { useContext, useEffect, useState } from "react";
import SearchIcon from "../icons/SearchIcon";
import TasksContext from "../context/TasksContext";
import useFilter from "../hooks/useFilter";

function Navbar() {
	const { filterParams, setFilterParams } = useContext(TasksContext);
	const [inputText, setInputText] = useState("");
	useEffect(() => {
		useFilter(
			undefined,
			undefined,
			inputText,
			filterParams,
			setFilterParams
		);
	}, [inputText]);
	return (
		<div className="px-6 py-4 text-sm h-fit">
			<div className="relative">
				<input
					type="text"
					placeholder="Search Task..."
					value={inputText}
					className="py-1.5 pl-10 pr-3 border-2 rounded-md w-[500px] outline-none focus:border-2 focus:border-gray-400 caret-green-400 text-gray-600 font-thin "
					onChange={(e) => setInputText(e.target.value)}
				/>
				<SearchIcon />
			</div>
		</div>
	);
}
export default Navbar;
