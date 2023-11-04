import SearchIcon from "../icons/SearchIcon";

function Navbar() {
	return (
		<div className="px-6 py-4 text-sm h-fit">
			<div className="relative">
				<input
					type="text"
					placeholder="Search Task..."
					className="py-1.5 pl-10 pr-3 border-2 rounded-md w-[500px] outline-none focus:border-2 focus:border-gray-400 caret-green-400 font-extralight "
				/>
				<SearchIcon />
			</div>
		</div>
	);
}
export default Navbar;
