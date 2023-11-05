import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const TasksContext = createContext();

const projectData = [
	{
		id: 1,
		title: "Design Component Library",
		priority: "medium",
		description:
			"Creating a comprehensive library of design components for consistency and reusability in our products.",
		dueDate: "15-11-2023",
		isComplete: false,
		projectName: "Design Systems",
	},
	{
		id: 2,
		title: "Color Palette Standardization",
		priority: "low",
		description:
			"Establishing a standardized color palette for a unified visual identity across all products.",
		dueDate: "05-12-2023",
		isComplete: false,
		projectName: "Design Systems",
	},
	{
		id: 3,
		title: "Typography Guidelines",
		priority: "high",
		description:
			"Defining typography guidelines to maintain a consistent and legible text style throughout the projects.",
		dueDate: "05-11-2023",
		isComplete: true,
		projectName: "Design Systems",
	},
	{
		id: 4,
		title: "Icon Redesign and Expansion",
		priority: "medium",
		description:
			"Updating existing icons and adding new ones to enhance the icon pack for our products.",
		dueDate: "10-12-2023",
		isComplete: false,
		projectName: "Icon Pack Update",
	},
	{
		id: 5,
		title: "User Feedback Analysis",
		priority: "low",
		description:
			"Analyze user feedback to identify icons that need improvement and prioritize changes.",
		dueDate: "30-11-2023",
		isComplete: false,
		projectName: "Icon Pack Update",
	},
	{
		id: 6,
		title: "Quality Assurance Testing",
		priority: "high",
		description:
			"Conduct thorough testing to ensure all icons are pixel-perfect and function correctly.",
		dueDate: "18-12-2023",
		isComplete: false,
		projectName: "Icon Pack Update",
	},
	{
		id: 7,
		title: "Wireframe Creation",
		priority: "medium",
		description:
			"Design wireframes for the new website layout to plan content and functionality.",
		dueDate: "25-11-2023",
		isComplete: false,
		projectName: "Website Redesign",
	},
	{
		id: 8,
		title: "Visual Design Mockups",
		priority: "high",
		description:
			"Develop visual design mockups for the website's appearance and style.",
		dueDate: "05-01-2024",
		isComplete: false,
		projectName: "Website Redesign",
	},
	{
		id: 9,
		title: "Responsive Design Testing",
		priority: "low",
		description:
			"Test the website design on various devices and screen sizes to ensure responsiveness.",
		dueDate: "15-01-2024",
		isComplete: false,
		projectName: "Website Redesign",
	},
	{
		id: 10,
		title: "User Persona Development",
		priority: "medium",
		description:
			"Create detailed user personas to guide design decisions and user-centered approaches.",
		dueDate: "30-11-2023",
		isComplete: false,
		projectName: "User Experience Design",
	},
	{
		id: 11,
		title: "A/B Testing Setup",
		priority: "high",
		description:
			"Set up A/B tests to gather data and insights for user experience improvements.",
		dueDate: "10-12-2023",
		isComplete: false,
		projectName: "User Experience Design",
	},
	{
		id: 12,
		title: "Usability Testing Sessions",
		priority: "low",
		description:
			"Conduct usability testing sessions with real users to identify issues and gather feedback.",
		dueDate: "20-12-2023",
		isComplete: false,
		projectName: "User Experience Design",
	},
];

export const TasksProvider = ({ children }) => {
	const [tasks, setTasks] = useState(projectData);
	const [filterParams, setFilterParams] = useState({
		selectedOption: "",
		projectName: "",
		inputText: "",
	});

	const deleteTasks = (id) => {
		if (window.confirm("Are you sure you want to delete this item?"))
			setTasks(tasks.filter((item) => item.id !== id));
	};
	const addTasks = (item) => {
		item.id = uuidv4();
		setTasks([item, ...tasks]);
	};

	const changeCompletedStatus = (id) => {
		const newTask = tasks.filter((task) => task.id === id);
		newTask[0].isComplete = !newTask[0].isComplete;
		setTasks([...tasks, newTask]);
	};

	const filterTasks = () => {
		let filteredTasks = projectData;
		if (filterParams.selectedOption) {
			if (filterParams.selectedOption === "All Tasks")
				filteredTasks = projectData;
			else if (filterParams.selectedOption === "Due Today") {
				const currentDate = new Date(Date.now());

				const day = String(currentDate.getDate()).padStart(2, "0");
				const month = String(currentDate.getMonth() + 1).padStart(
					2,
					"0"
				);
				const year = currentDate.getFullYear();

				const formattedDate = `${day}-${month}-${year}`;
				filteredTasks = projectData.filter(
					(task) => task.dueDate === formattedDate
				);
			} else if (filterParams.selectedOption === "High Priority")
				filteredTasks = projectData.filter(
					(task) => task.priority === "high"
				);
		}

		if (filterParams.projectName) {
			filteredTasks = filteredTasks.filter(
				(task) => task.projectName === filterParams.projectName
			);
		}

		if (filterParams.inputText) {
			filteredTasks = filteredTasks.filter((task) => {
				const taskTitle = task.title.toLowerCase().trim();
				return taskTitle.includes(
					filterParams.inputText.toLowerCase().trim()
				);
			});
		}

		setTasks(filteredTasks);
	};

	useEffect(() => {
		filterTasks();
	}, [filterParams]);

	return (
		<TasksContext.Provider
			value={{
				tasks,
				deleteTasks,
				addTasks,
				filterParams,
				setFilterParams,
				changeCompletedStatus,
			}}
		>
			{children}
		</TasksContext.Provider>
	);
};

export default TasksContext;
