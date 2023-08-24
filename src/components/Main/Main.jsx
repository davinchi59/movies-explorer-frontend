import './Main.css'
import React from 'react';
import Hero from "../Hero/Hero";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Main = () => {
	return (
		<div className='main'>
			<Header/>
			<Hero/>
			<AboutProject/>
			<Techs/>
			<AboutMe/>
			<Footer/>
		</div>
	);
};

export default Main;
