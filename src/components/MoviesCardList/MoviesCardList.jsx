import './MoviesCardList.css'
import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ list, canRemove }) => {
	return (
		<section className='movies-card-list'>
			<div className="movies-card-list__container container">
				<div className="movies-card-list__list">
					{list.map(({ id, name, duration, isSaved, imageUrl }) => (
						<MoviesCard
							key={id}
							imageUrl={imageUrl}
							name={name}
							duration={duration}
							isSaved={isSaved}
							canRemove={canRemove}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default MoviesCardList;
