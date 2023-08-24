import './FilterCheckbox.css'
import React from 'react';

const FilterCheckbox = ({ text, checked, toggle }) => {
	return (
		<label className='filter-checkbox'>
			<input type="checkbox" className='filter-checkbox__input' checked={checked} onChange={toggle}/>
			<div className='filter-checkbox__check'/>
			<h4 className='filter-checkbox__text'>{text}</h4>
		</label>
	);
};

export default FilterCheckbox;
