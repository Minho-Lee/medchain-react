import { 
	GET_ACTIVE_PATIENT_DATA,
  GET_ACTIVE_PATIENT_DATA_SUCCESS,
  GET_ACTIVE_PATIENT_DATA_FAIL,
	SAVE_PATIENT_DATA
} from '../actions/types';
 
 
// TODO: Get this inital state from DB, maybe make it a list of patients you can choose from
const INIT_STATE = {
  name: "",
  id: 0,
  age: 0,
  occupation: "",
  address: "",
  phone: "",
  email: "",
  medPrescribed: [], 
  recentActivities: []
 
} 
 
export default (state=INIT_STATE, action) => { 
  switch (action.type) { 
    case GET_ACTIVE_PATIENT_DATA: { 
      return { payload: action.payload } 
    } 

    case GET_ACTIVE_PATIENT_DATA_SUCCESS: {
      let patientInfo = {};


      Object.keys(action.payload).map((key) => {
        var item = action.payload[key];

        Object.keys(item).map((key2) => {
          var item2 = item[key2]
          patientInfo = {
            name: key,
            id: key2,
            age: item2.age,
            occupation: item2.occupation,
            address: item2.address,
            phone: item2.phone,
            email: item2.email,
            medPrescribed: item2.medPrescribed,
            recentActivities: item2.recentActivities
          }
        });
    });


    return { ...state, ...patientInfo }
    }

    case GET_ACTIVE_PATIENT_DATA_FAIL: {
      return {...state, payload: action.payload }
    }

    case SAVE_PATIENT_DATA: {
    	return { payload: action.payload };
    }
 
    default: 
      return state; 
  } 
}
