import './Movies.css'
import React, {useContext} from 'react';
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {AppContext} from "../../contexts/AppContext";

const Movies = () => {
	const { movies } = useContext(AppContext)
	return (
		<div className='movies'>
			<Header/>
			<SearchForm/>
			{/*<Preloader/>*/}
			<MoviesCardList list={movies}/>
			<div className="movies__more container">
				<button className='movies__button' type='button'>Ещё</button>
			</div>
			<Footer/>
		</div>
	);
};

export default Movies;
