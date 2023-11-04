import BinIcon from "../icons/BinIcon";
import CheckIcon from "../icons/CheckIcon";

const projectData = [
	{
		title: "Design Component Library",
		priority: "medium",
		description:
			"Creating a comprehensive library of design components for consistency and reusability in our products.",
		dueDate: "15-11-2023",
		isComplete: false,
		projectName: "Design Systems",
	},
	{
		title: "Color Palette Standardization",
		priority: "low",
		description:
			"Establishing a standardized color palette for a unified visual identity across all products.",
		dueDate: "05-12-2023",
		isComplete: false,
		projectName: "Design Systems",
	},
	{
		title: "Typography Guidelines",
		priority: "high",
		description:
			"Defining typography guidelines to maintain a consistent and legible text style throughout the projects.",
		dueDate: "20-11-2023",
		isComplete: true,
		projectName: "Design Systems",
	},
	{
		title: "Icon Redesign and Expansion",
		priority: "medium",
		description:
			"Updating existing icons and adding new ones to enhance the icon pack for our products.",
		dueDate: "10-12-2023",
		isComplete: false,
		projectName: "Icon Pack Update",
	},
	{
		title: "User Feedback Analysis",
		priority: "low",
		description:
			"Analyze user feedback to identify icons that need improvement and prioritize changes.",
		dueDate: "30-11-2023",
		isComplete: false,
		projectName: "Icon Pack Update",
	},
	{
		title: "Quality Assurance Testing",
		priority: "high",
		description:
			"Conduct thorough testing to ensure all icons are pixel-perfect and function correctly.",
		dueDate: "18-12-2023",
		isComplete: false,
		projectName: "Icon Pack Update",
	},
	{
		title: "Wireframe Creation",
		priority: "medium",
		description:
			"Design wireframes for the new website layout to plan content and functionality.",
		dueDate: "25-11-2023",
		isComplete: false,
		projectName: "Website Redesign",
	},
	{
		title: "Visual Design Mockups",
		priority: "high",
		description:
			"Develop visual design mockups for the website's appearance and style.",
		dueDate: "05-01-2024",
		isComplete: false,
		projectName: "Website Redesign",
	},
	{
		title: "Responsive Design Testing",
		priority: "low",
		description:
			"Test the website design on various devices and screen sizes to ensure responsiveness.",
		dueDate: "15-01-2024",
		isComplete: false,
		projectName: "Website Redesign",
	},
	{
		title: "User Persona Development",
		priority: "medium",
		description:
			"Create detailed user personas to guide design decisions and user-centered approaches.",
		dueDate: "30-11-2023",
		isComplete: false,
		projectName: "User Experience Design",
	},
	{
		title: "A/B Testing Setup",
		priority: "high",
		description:
			"Set up A/B tests to gather data and insights for user experience improvements.",
		dueDate: "10-12-2023",
		isComplete: false,
		projectName: "User Experience Design",
	},
	{
		title: "Usability Testing Sessions",
		priority: "low",
		description:
			"Conduct usability testing sessions with real users to identify issues and gather feedback.",
		dueDate: "20-12-2023",
		isComplete: false,
		projectName: "User Experience Design",
	},
];

const EventCard = ({ event }) => {
	return (
		<div className="flex flex-col justify-between  border-2 border-gray-200 rounded-md overflow-hidden px-3 pt-4 ">
			<div className="flex flex-col ">
				<div className="flex justify-between">
					<div className="font-['Syne'] font-bold text-lg tracking-tight">
						{event.title}
					</div>
					<div className="flex flex-col justify-center p-1 hover:bg-gray-100 cursor-pointer">
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
				<div className="text-sm text-gray-600 pt-3 pb-2">
					{event.description}
				</div>
			</div>
			<div>
				<div className="border border-gray-200"></div>

				<button
					className={`${
						event.isComplete
							? "bg-black text-white border-black"
							: "text-black bg-white "
					} w-full px-1.5 py-1.5 text-left flex gap-1.5 text-xs my-3 tracking-tight font-black border-2 border-gray-200 rounded-md`}
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
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{projectData.map((event, index) => (
				<EventCard key={index} event={event} />
			))}
		</div>
	);
};

export default CardGrid;
