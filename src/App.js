import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import styled from 'styled-components';
import { Home, About } from './pages';

const AppWrapper = styled.div`
	overflow: auto;
	scroll-behavior: smooth;
`;
function _renderScreen(route) {
	switch(route) {
		case 'work':
			return (
				<AppWrapper>
				<About />
				</AppWrapper>
				)
		case 'interests':
			return (
				<AppWrapper>
				<About />
				</AppWrapper>
				)
		case 'about':
			return (
				<AppWrapper>
				<About />
				</AppWrapper>
				)
		case 'homepage':
		default:
			return(
				<AppWrapper>
				<Home />
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