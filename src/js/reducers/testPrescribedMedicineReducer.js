function TestPrescribedMedicineReducer(state = [], action) {
	switch(action.type) {
		case 'ADD_MEDICINE': {
			console.log('ADD MEDICINE');
			return state;
		}
		default:
			return state;
	}
	// console.log(state, action);
	// return state;
}

export default TestPrescribedMedicineReducer;