function useFilter(
	selectedOption = "",
	projectName = "",
	inputText = "",
	filterParams,
	setFilterParams
) {
	if (selectedOption !== filterParams.selectedOption) {
		setFilterParams({ ...filterParams, selectedOption: selectedOption });
	}
	if (projectName !== filterParams.projectName) {
		setFilterParams({ ...filterParams, projectName: projectName });
	}
	if (inputText != filterParams.inputText) {
		setFilterParams({ ...filterParams, inputText: inputText });
	}
}

export default useFilter;
