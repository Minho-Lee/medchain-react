import React from 'react';

import FaHome from 'react-icons/lib/fa/home';
import FaPhone from 'react-icons/lib/fa/phone';
import FaEnvelope from 'react-icons/lib/fa/envelope';


const PatientMetaData = ({address, phone, email}) => {
	return(
		<div className="row personal-info">
			<div className="personal-info-metaData">
				<div className="metaData">
					<FaHome className="faIcon" />
				</div>
				<div className="metaData">
					<h3>{address}</h3>
				</div>	
			</div>
			<div className="personal-info-metaData">
				<div className="metaData">
					<FaPhone className="faIcon"  />
				</div>
				<div className="metaData">
					<h3>{phone}</h3>
				</div>
			</div>
			<div className="personal-info-metaData">
				<div className="metaData">
					<FaEnvelope className="faIcon"  />
				</div>
				<div className="metaData">
					<h3>{email}</h3>
				</div>
			</div>
		</div>
	);
}

export default PatientMetaData;