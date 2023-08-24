import './Logo.css'
import React from 'react';
import LogoImage from '../../images/logo.svg'

const Logo = () => {

	return (
		<img className='logo' src={LogoImage} alt="Logo"/>
	);
};

export default Logo;
