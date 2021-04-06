import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import styled from 'styled-components';
import { Home, Info } from './pages';

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
			<Info />
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