import React from 'react';

const RecentActivity = ({date, comment}) => {
	const formattedDate = formatDate(date);
	return (
		<li>
			<span><b>{formattedDate}</b></span>
			<span> {comment} </span>
		</li>
	);
}

var formatDate = (date) => {
	var newDate = new Date(date);
	const today = new Date();

	const year = newDate.getUTCFullYear();
	const month = newDate.getUTCMonth() + 1;
	const day = newDate.getUTCDate();

	newDate = date;
	if(today.getUTCFullYear() === year && today.getUTCMonth() + 1 === month) {
		var dayDiff = today.getUTCDate() - day;
		if(dayDiff <= 10 && dayDiff> 0) {
			newDate = (today.getUTCDate() - day) + " days ago"
		} else if (dayDiff === 0) {
			newDate = "Today"
		}
	}

	return newDate;
} 

export default RecentActivity;