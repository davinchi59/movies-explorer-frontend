import './Profile.css'
import React, {useContext} from 'react';
import Header from "../Header/Header";
import {AppContext} from "../../contexts/AppContext";

const Profile = () => {
	const { userInfo } = useContext(AppContext)

	return (
		<section className='profile'>
			<Header/>
			<div className="profile__container container">
				<h2 className='profile__title'>Привет, {userInfo.name}!</h2>
			</div>
		</section>
	);
};

export default Profile;
