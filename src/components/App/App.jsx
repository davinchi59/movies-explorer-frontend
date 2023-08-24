import './App.css'
import React, {useState} from 'react';
import {AppContext} from "../../contexts/AppContext";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import {TestMovies, TestSavedMovies, TestUserInfo} from "../../constants/testData";
import Profile from "../Profile/Profile";

const App = () => {
	const [loggedIn, setLoggedIn] = useState(true)
	const [movies, setMovies] = useState(TestMovies)
	const [savedMovies, setSavedMovies] = useState(TestSavedMovies)
	const [userInfo, setUserInfo] = useState(TestUserInfo)

	const AppContextValue = {
		loggedIn,
		movies,
		savedMovies,
		userInfo,
	}

	return (
		<AppContext.Provider value={AppContextValue}>
		<div className='app'>
			{/*<Main/>*/}
			{/*<Movies/>*/}
			{/*<SavedMovies/>*/}
			<Profile/>
		</div>
		</AppContext.Provider>
	);
};

export default App;
