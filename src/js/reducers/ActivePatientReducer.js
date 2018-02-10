import { GET_ACTIVE_PATIENT_DATA } from '../actions/types';
 
 
// TODO: Get this inital state from DB, maybe make it a list of patients you can choose from
const INIT_STATE = {
  id: 1,
  name: "Sukhpal",
  age: 22,
  occupation: "Software Developer",
  address: "288 Spadina Road",
  phone: "(416) 338-1882",
  email: "zahaank24@gmail.com",
  medPrescribed: [ 
    {
      id: 1,
      med: "Ribavirin"
    },
    { 
      id: 2,
      med: "Insulin"
    }, 
    {
      id: 3,
      med: "ACE Inhibitor"
    }, 
    { 
      id: 4,
      med: "Anti-Depresesant"
    }, 
    { 
      id: 5,
      med: "Levothyroxine"
    }
  ], 
  recentActivities: [
    {
      id: "1",
      date: "10 days ago",
      comment: "Appointment Booked"
    },
    {
      id: "2",
      date: "5 days ago",
      comment: "Prescription Added: Leo.."
    },
    { 
      id: "3", 
      date: "2 days ago", 
      comment: "comment 3" 
    }, 
    { 
      id: "4", 
      date: "1 days ago", 
      comment: "Prescription added: ACE Inhibitor Anti-Depressant" 
    } 
  ] 
 
} 
 
export default (state=INIT_STATE, action) => { 
  switch (action.type) { 
    case GET_ACTIVE_PATIENT_DATA: { 
      return { ...state } 
    } 
 
    default: 
      return state; 
  } 
}
