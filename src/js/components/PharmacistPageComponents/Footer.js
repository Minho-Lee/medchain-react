import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
	return(
		<div>
			<p className='mb-0'>Thank you for choosing our services.</p>
			<p className='mb-0'>We hope to see you again soon.</p>
			<Link to='/' className='logo-color-change'>
				<span className='logo-color-one'>med</span><span className='logo-color-two'>chain</span>
			</Link>
		</div>
	);
}

export default Footer;