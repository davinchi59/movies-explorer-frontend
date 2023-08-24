import './Header.css'
import React, {useContext} from 'react';
import {AppContext} from "../../contexts/AppContext";
import AvatarImage from '../../images/avatar.svg'
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

const Header = () => {
	const {loggedIn} = useContext(AppContext)

	return (
		<header className='header'>
			<div className="header__container container">
				<Logo/>
				<div className='header__content'>
					{loggedIn ? (
						<>
							<Navigation/>
							<button type='button' className="header__profile">
								<p className="header__text">Аккаунт</p>
								<img src={AvatarImage} className="header__avatar"/>
							</button>
						</>
					) : (
						<div className='header__auth'>
							<a className="header__link" href='#'>Регистрация</a>
							<button className='header__button' type='button'>Войти</button>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
