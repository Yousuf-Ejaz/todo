import { rankWith as DatePickerTester, scopeEndsWith } from "@jsonforms/core";

export default DatePickerTester(
	13, //increase rank as needed
	scopeEndsWith("dueDate")
);
