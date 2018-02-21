import React from 'react';

const RecentActivity = ({date, comment}) => {
	return (
		<li>
			<span><b>{date}</b></span>
			<span> {comment} </span>
		</li>
	);
}

export default RecentActivity;