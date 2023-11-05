import { rankWith, scopeEndsWith } from "@jsonforms/core";

export default rankWith(
	13, //increase rank as needed
	scopeEndsWith("due_date")
);
