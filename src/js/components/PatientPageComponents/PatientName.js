import React from 'react';
import RandomGuyImage from '../../../images/square-sample-face.jpg';

const PatientName = ({name, age, occupation, picture}) => {
	return (
	    <div className="row header-section"> 
	    	<div> 
		        <div className="face-picture"> 
		          <img className='mr-3' src={(picture) ? picture : RandomGuyImage} alt="" height={300} /> 
		        </div> 
		        <div className="patient-name"> 
		          <h4><b>{name}, {age}</b></h4> 
		          <h5>{occupation}</h5> 
		        </div> 
	    	</div>
	    </div>
	);
}
	
export default PatientName;