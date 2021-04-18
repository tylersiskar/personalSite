import React, { useState } from 'react';
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import styled from 'styled-components';
import { Home, About, ContactModal } from './pages';
import { Header, wheel } from './components';
import { data } from './data';

const AppWrapper = styled.div`
	background-image: url(${wheel});
	background-position: center;
	background-size: cover;
	overflow: hidden;
	scroll-behavior: smooth;

`;
function _renderScreen(route) {
	const [ animate, animateContactPage ] = useState(false);
	const [ contactPage, showContactPage ] = useState(false);
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

	switch(route) {
		case 'work':
			return (
				<AppWrapper>
				{contactPage && <ContactModal open={animate} onClick={_onClose} />}
				<Header onButtonClick={_onOpen}/>
				<About data={data[path]}/>
				</AppWrapper>
				)
		case 'interests':
			return (
				<AppWrapper>
				{contactPage && <ContactModal open={animate} onClick={_onClose} />}
				{!contactPage && <Header onButtonClick={_onOpen}/>}
				<About data={data[path]}/>
				</AppWrapper>
				)
		case 'about':
			return (
				<AppWrapper>
				{contactPage && <ContactModal open={animate} onClick={_onClose} />}
				<Header onButtonClick={_onOpen}/>
				<About data={data[path]}/>
				</AppWrapper>
				)
		case 'homepage':
		default:
			return(
				<AppWrapper>
				<Home data={data['home']}/>
				</AppWrapper>
				);
	}
}

const App = props => {
	return(
    <Switch>
      <Route 
      	exact
        path="/" 
        component={() => _renderScreen('homepage')}/>
      <Route 
      	exact
        path="/about" 
        component={() => _renderScreen('about')}/>
      <Route 
      	exact
        path="/work" 
        component={() => _renderScreen('work')}/>
      <Route 
      	exact
        path="/interests" 
        component={() => _renderScreen('interests')}/>
		  <Redirect to="/"/>
    </Switch>
    )
}

export default App;