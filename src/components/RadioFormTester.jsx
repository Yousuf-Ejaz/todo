import { rankWith as RadioFormTester, scopeEndsWith } from "@jsonforms/core";

export default RadioFormTester(
	13, //increase rank as needed
	scopeEndsWith("priority")
);
