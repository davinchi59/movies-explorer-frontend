import './Footer.css'
import React from 'react';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className="footer__container container">
				<h4 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h4>
				<div className="footer__row">
					<h4 className="footer__copyright">&copy; 2020</h4>
					<ul className="footer__list">
						<li>
							<a href="#" className='footer__link'>Яндекс.Практикум</a>
						</li>
						<li>
							<a href="#" className='footer__link'>Github</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
