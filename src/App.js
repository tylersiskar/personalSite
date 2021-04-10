import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import styled from 'styled-components';
import { Home, Info, ReverseInfo } from './pages';

const AppWrapper = styled.div`
	overflow: auto;
	scroll-behavior: smooth;
`;
function _renderScreen(route) {
	switch(route) {
		case 'homepage':
	default:
		return(
			<AppWrapper>
			<Home />
			<Info title="Bio" />
			<Info inverted title="Projects" />
			<Info title="Interests" />
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
		  <Redirect to="/"/>
    </Switch>
    )
}

export default App;