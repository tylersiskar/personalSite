import React, { useState } from 'react';
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import styled from 'styled-components';
import { Home, About, ContactModal, Map } from './pages';
import { Header, wheel, Menu } from './components';
import { data } from './data';

const AppWrapper = styled.div`
	background-image: url(${wheel});
	background-position: center;
	background-size: cover;
	overflow: hidden;
	scroll-behavior: smooth;

`;
function _renderScreen(route) {
	const [animate, animateContactPage] = useState(false);
	const [contactPage, showContactPage] = useState(false);
	const [open, setOpen] = useState(false);
	const loc = useLocation();
	let path = loc.pathname.substring(1, loc.pathname.length);

	function _onOpen() {
		showContactPage(true)
		animateContactPage(true);
	}

	function _onClose() {
		animateContactPage(false);
		setTimeout(() => {
			showContactPage(false);
		}, 350)
	}

	switch (route) {
		case 'map':
			return (
				<AppWrapper>
					{contactPage && <ContactModal open={animate} onClick={_onClose} />}
					<Header onButtonClick={_onOpen} path={path} onBurgerClick={setOpen} />
					<Menu open={open} onContactClick={_onOpen} />
					<Map />
				</AppWrapper>
			)
		case 'work':
			return (
				<AppWrapper>
					{contactPage && <ContactModal open={animate} onClick={_onClose} />}
					<Header onButtonClick={_onOpen} path={path} onBurgerClick={setOpen} />
					<Menu open={open} onContactClick={_onOpen} />
					<About data={data[path]} />
				</AppWrapper>
			)
		case 'academia':
			return (
				<AppWrapper>
					{contactPage && <ContactModal open={animate} onClick={_onClose} />}
					<Header onButtonClick={_onOpen} path={path} onBurgerClick={setOpen} />
					<Menu open={open} onContactClick={_onOpen} />
					<About data={data[path]} />
				</AppWrapper>
			)
		case 'about':
			return (
				<AppWrapper>
					{contactPage && <ContactModal open={animate} onClick={_onClose} />}
					<Header onButtonClick={_onOpen} path={path} onBurgerClick={setOpen} />
					<Menu open={open} onContactClick={_onOpen} />
					<About data={data[path]} />
				</AppWrapper>
			)
		case 'homepage':
		default:
			return (
				<AppWrapper>
					<Home data={data['home']} />
				</AppWrapper>
			);
	}
}

const App = props => {
	return (
		<Switch>
			<Route
				exact
				path="/map"
				component={() => _renderScreen('map')} />
			<Route
				exact
				path="/"
				component={() => _renderScreen('homepage')} />
			<Route
				exact
				path="/about"
				component={() => _renderScreen('about')} />
			<Route
				exact
				path="/work"
				component={() => _renderScreen('work')} />
			<Route
				exact
				path="/academia"
				component={() => _renderScreen('academia')} />
			<Redirect to="/" />
		</Switch>
	)
}

export default App;