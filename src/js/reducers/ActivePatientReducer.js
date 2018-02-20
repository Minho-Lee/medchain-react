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
      console.log(action.payload);
      return { payload: action.payload } 
    } 

    case GET_ACTIVE_PATIENT_DATA_SUCCESS: {
      console.log(action.payload);

      const patientInfo = Object.keys(action.payload).map((key) => {
        var item = action.payload[key];
        console.log(key);
        console.log(item);

        const patientInfo2 = Object.keys(item).map((key2) => {
          var item2 = item[key]
          console.log(item2.address);
          console.log(item2.occupation);
        });

      });

      return { ...state, 
                  name: 'zahaan',
                  id: '',
                  age: 0,
                  occupation: 'SoftEng',
                  address: '',
                  phone: '',
                  email: '',
                  medPrescribed: [],
                  recentActivities: []
              }
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
