import './AboutProject.css'
import React from 'react';
import Title from "../Title/Title";

const AboutProject = () => {
	return (
		<section className='about-project'>
			<div className="about-project__container container">
				<Title text='О проекте'/>
				<div className="about-project__info">
					<div className="about-project__block">
						<h3 className="about-project__name">
							Дипломный проект включал 5 этапов
						</h3>
						<p className="about-project__description">
							Составление плана, работу над бэкендом, вёрстку, добавление
							<br/>
							функциональности и финальные доработки.
						</p>
					</div>
					<div className="about-project__block">
						<h3 className="about-project__name">
							На выполнение диплома ушло 5 недель
						</h3>
						<p className="about-project__description">
							У каждого этапа был мягкий и жёсткий дедлайн, которые нужно был
							<br/>
							соблюдать, чтобы успешно защититься.
						</p>
					</div>
				</div>
				<div className="about-project__line">
					<div className="about-project__progress about-project__progress_width_1 about-project__progress_completed">
						<h4 className="about-project__week">1 неделя</h4>
						<p className="about-project__helper">Back-end</p>
					</div>
					<div className="about-project__progress about-project__progress_width_4">
						<h4 className="about-project__week">4 недели</h4>
						<p className="about-project__helper">Front-end</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutProject;
