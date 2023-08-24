import './AboutMe.css'
import React from 'react';
import Title from "../Title/Title";
import AboutMeImage from '../../images/about-me.png'
import AboutMeLink from '../../images/about-me__link.svg'

const AboutMe = () => {
	return (
		<section className='about-me'>
			<div className="about-me__container container">
				<Title text='Студент'/>
				<div className="about-me__block">
					<div className="about-me__info">
						<div>
							<h3 className="about-me__name">Виталий</h3>
							<h4 className="about-me__helper">Фронтенд-разработчик, 30 лет</h4>
							<p className="about-me__description">
								Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
								и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
								компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
								ушёл с постоянной работы.
							</p>
						</div>
						<a className='about-me__link' href="#">Github</a>
					</div>
					<img className='about-me__image' src={AboutMeImage} alt="About me (avatar)"/>
				</div>
				<h3 className='about-me__subtitle'>Портфолио</h3>
				<ul className="about-me__list">
					<li className='about-me__item'>
						<a href="#" className='about-me__work-link'>
							<h3 className='about-me__work'>Статичный сайт</h3>
							<img className='about-me__icon' src={AboutMeLink} alt="about work link"/>
						</a>
					</li>
					<li className='about-me__item'>
						<a href="#" className='about-me__work-link'>
							<h3 className='about-me__work'>Адаптивный сайт</h3>
							<img className='about-me__icon' src={AboutMeLink} alt="about work link"/>
						</a>
					</li>
					<li className='about-me__item'>
						<a href="#" className='about-me__work-link'>
							<h3 className='about-me__work'>Одностраничное приложение</h3>
							<img className='about-me__icon' src={AboutMeLink} alt="about work link"/>
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default AboutMe;
