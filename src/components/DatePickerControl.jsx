import { withJsonFormsControlProps } from "@jsonforms/react";
import RainbowDatepicker from "./DatePicker";

const DatePickerControl = ({ data, handleChange, path }) => (
	<RainbowDatepicker
		date={data}
		updateValue={(newValue) => handleChange(path, newValue)}
	/>
);

export default withJsonFormsControlProps(DatePickerControl);
