import './Preloader.css'
import React from 'react';
import HeroImage from '../../images/hero.svg'

const Preloader = () => {
	return (
		<section className='preloader'>
			<div className="preloader__container container">
				<img className='preloader__image' src={HeroImage} alt="Logo"/>
			</div>
		</section>
	);
};

export default Preloader;
