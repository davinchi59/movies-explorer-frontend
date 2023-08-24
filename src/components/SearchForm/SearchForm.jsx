import './SearchForm.css'
import React, {useState} from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const Filters = {
	IsShort: 0,
}

const SearchForm = () => {
	const [film, setFilm] = useState('')
	const [filters, setFilters] = useState({
		[Filters.IsShort]: false,
	})

	const toggleFilter = (filterName) => () => setFilters(prev => ({...prev, [filterName]: !prev[filterName]}))

	return (
		<form className='search-form'>
			<div className="search-form__container container">
				<div className='search-form__row'>
					<input className='search-form__input' type="text" placeholder='Фильм' value={film}
								 onChange={e => setFilm(e.target.value)}/>
					<button className='search-form__button' type='submit'>Найти</button>
				</div>
				<ul className='search-form__filters'>
					<FilterCheckbox
						text='Короткометражки'
						checked={filters[Filters.IsShort]}
						toggle={toggleFilter(Filters.IsShort)}
					/>
				</ul>
			</div>
		</form>
	);
};

export default SearchForm;
