import './Navigation.css'
import React from 'react';

const Navigation = () => {
	return (
		<div className='navigation'>
			<div className='navigation__item navigation__item_active'>Фильмы</div>
			<div className='navigation__item'>Сохранённые фильмы</div>
		</div>
	);
};

export default Navigation;
