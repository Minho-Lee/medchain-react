import React from 'react';

import FaHome from 'react-icons/lib/fa/home'; 
import FaPhone from 'react-icons/lib/fa/phone'; 
import FaEnvelope from 'react-icons/lib/fa/envelope'; 

const PatientMetaData = ({address, phone, email}) => {
	return(
    <div className="personal-info"> 
    	<div className="personal-info-metaData">
	        <div className="metaData"> 
	          <FaHome className="faIcon metaData" /> 
	        </div>

	        <div className="metaData"> 
	          <h5 className="metaData">{address}</h5> 
	        </div> 

	    </div>

	    <div className="personal-info-metaData"> 
	      	<div className="metaData"> 
	          <FaPhone className="faIcon"  /> 
	        </div> 

	        <div className="metaData"> 
	          <h5>{phone}</h5> 
	        </div>
	    </div>

	    <div className="personal-info-metaData"> 
	        <div className="metaData"> 
	          <FaEnvelope className="faIcon"  /> 
	        </div> 

	        <div className="metaData"> 
	          <h5>{email}</h5> 
	        </div>         
		</div>
	</div>
	);
}

export default PatientMetaData;