import './Techs.css'
import React from 'react';
import Title from "../Title/Title";

const Techs = () => {
	return (
		<section className='techs'>
			<div className="techs__container container">
				<Title text='Технологии'/>
				<h3 className="techs__title">7 технологий</h3>
				<div className="techs__description">
					На курсе веб-разработки мы освоили технологии, которые применили
					<br/>
					в дипломном проекте.
				</div>
				<ul className="techs__list">
					<li className='techs__item'>HTML</li>
					<li className='techs__item'>CSS</li>
					<li className='techs__item'>JS</li>
					<li className='techs__item'>React</li>
					<li className='techs__item'>Git</li>
					<li className='techs__item'>Express.js</li>
					<li className='techs__item'>mongoDB</li>
				</ul>
			</div>
		</section>
	);
};

export default Techs;
