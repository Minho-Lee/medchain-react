import { 
	GET_ACTIVE_PATIENT_DATA,
  GET_ACTIVE_PATIENT_DATA_SUCCESS,
  GET_ACTIVE_PATIENT_DATA_FAIL,
	SAVE_PATIENT_DATA
} from '../actions/types';
 
 const INIT_STATE = {
  name: "",
  id: 0,
  age: 0,
  occupation: "",
  address: "",
  phone: "",
  email: "",
  medPrescribed: [], 
  recentActivities: [],
  user: null,
} 
 
export default (state=INIT_STATE, action) => { 
  switch (action.type) { 
    case GET_ACTIVE_PATIENT_DATA: {
    	console.log('GET_ACTIVE_PATIENT_DATA');
      // TODO: Possibly add loading feature here 
      return { ...state } 
    } 

    case GET_ACTIVE_PATIENT_DATA_SUCCESS: {
    	console.log('GET_ACTIVE_PATIENT_DATA_SUCCESS');
      let patientInfo = {};

      // setup Patient Info
      var patInfo = action.payload.PatientInfo;
      for(let key in patInfo) {
          patientInfo = {
          name: patInfo[key].name,
          age: patInfo[key].age,
          occupation: patInfo[key].occupation,
          address: patInfo[key].address,
          phone: patInfo[key].phone,
          email: patInfo[key].email
        }
      }

      // setup MedPrescribed
      var medPrescribed = action.payload.MedPrescribed;
      var medPrescribedList = [];
      for(let key in medPrescribed) {
        medPrescribed[key]['id'] = key;
        medPrescribedList.push(medPrescribed[key]);
      }
      patientInfo['medPrescribed'] = medPrescribedList;

      // setup Diseases
      var dis = action.payload.Diseases;
      var disList = [];
      for(let key in dis) {
        dis[key]['id'] = key;
        disList.push(dis[key]);
      }
      patientInfo['diseases'] = disList;

      // setup Recent Acitvity
      var recAct = action.payload.RecentActivity;
      var recActList = [];
      for(let key in recAct) {
        recAct[key]['id'] = key;
        recActList.push(recAct[key]);
      }
      patientInfo['recentActivities'] = recActList;


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
