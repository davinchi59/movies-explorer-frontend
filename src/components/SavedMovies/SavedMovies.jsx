import './SavedMovies.css'
import React, {useContext} from 'react';
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {AppContext} from "../../contexts/AppContext";

const SavedMovies = () => {
	const { savedMovies } = useContext(AppContext)
	return (
		<div className='saved-movies'>
			<Header/>
			<SearchForm/>
			{/*<Preloader/>*/}
			<MoviesCardList list={savedMovies} canRemove/>
			<Footer/>
		</div>
	);
};

export default SavedMovies;
