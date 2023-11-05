import React, { useState } from "react";
import { DatePicker } from "react-rainbow-components";

const format = (dateString) => {
	const date = new Date(dateString);

	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
	const year = date.getFullYear();

	const formattedDate = `${day}-${month}-${year}`;

	return formattedDate;
};

export default function RainbowDatepicker({ currDate, updateValue }) {
	const [date, setDate] = useState(currDate);

	function onChange(date) {
		setDate(date);
		updateValue(format(date));
	}

	return (
		<DatePicker
			id="datePicker-1"
			value={date}
			onChange={onChange}
			label="DatePicker Label"
			formatStyle="large"
		/>
	);
}
