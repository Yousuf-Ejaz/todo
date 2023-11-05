import { withJsonFormsControlProps } from "@jsonforms/react";
import RadioForm from "./RadioForm";

const RadioFormControl = ({ data, handleChange, path }) => (
	<RadioForm
		currValue={data}
		updateValue={(newValue) => handleChange(path, newValue)}
	/>
);

export default withJsonFormsControlProps(RadioFormControl);
