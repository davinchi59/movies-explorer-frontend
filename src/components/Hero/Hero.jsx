import './Hero.css'
import React from 'react';
import HeroImage from '../../images/hero.svg'

const Hero = () => {
	return (
		<section className='hero'>
			<div className="hero__container container">
				<div className="hero__content">
					<h1 className='hero__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
					<p className='hero__helper'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
					<button type='button' className='hero__button'>Узнать больше</button>
				</div>
				<img src={HeroImage} alt="Hero image" className="hero__image"/>
			</div>
		</section>
	);
};

export default Hero;
