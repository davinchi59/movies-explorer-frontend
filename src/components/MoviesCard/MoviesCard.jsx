import './MoviesCard.css'
import React from 'react';
import DefaultImage from '../../images/card.png'

const MoviesCard = ({imageUrl, name, duration, isSaved, canRemove}) => {
	return (
		<div className='movies-card'>
			<div className="movies-card__header">
				<h3 className="movies-card__name">{name}</h3>
				<p className="movies-card__duration">{duration} минут</p>
			</div>
			<img className="movies-card__image" src={imageUrl} alt='Film image'/>
			<div className="movies-card__footer">
				<button
					className={`movies-card__button ${isSaved ? 'movies-card__button_saved' : ''} ${canRemove ? 'movies-card__button_remove' : ''}`}
					type='button'
				>
					Сохранить
				</button>
			</div>
		</div>
	);
};

export default MoviesCard;
