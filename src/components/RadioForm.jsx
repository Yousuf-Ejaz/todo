import { useState } from "react";

function RadioForm({ currValue, updateValue }) {
	const [priority, setPriority] = useState(currValue);
	return (
		<ul className="flex gap-4 py-3">
			<li className="flex gap-4">
				<div className="flex flex-col justify-center">
					<input
						id="r1"
						type="radio"
						name="radio"
						className="form-radio text-green-600   border-green-600 e"
						value="low"
						checked={priority === "low"}
						onClick={() => {
							setPriority("low");
							updateValue("low");
						}}
					/>
				</div>
				<label for="r1" className="text-green-600  ">
					Low
				</label>
			</li>
			<li className="flex gap-4">
				<div className="flex flex-col justify-center">
					<input
						id="r2"
						type="radio"
						name="radio"
						className="form-radio text-blue-600  border-blue-600"
						value="medium"
						checked={priority === "medium"}
						onClick={() => {
							setPriority("medium");
							updateValue("medium");
						}}
					/>
				</div>
				<label for="r2" className="text-blue-600 ">
					Medium
				</label>
			</li>
			<li className="flex gap-4">
				<div className="flex flex-col justify-center">
					<input
						id="r3"
						type="radio"
						name="radio"
						className="form-radio text-red-600  border-red-600 "
						value="high"
						checked={priority === "high"}
						onClick={() => {
							setPriority("high");
							updateValue("high");
						}}
					/>
				</div>
				<label for="r3" className="text-red-600 ">
					High
				</label>
			</li>
		</ul>
	);
}
export default RadioForm;
