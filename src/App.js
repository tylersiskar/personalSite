import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route,
         Switch,
         Redirect }             from "react-router-dom";

import HomePage from './pages/HomePage';
import MusicPage from './pages/MusicPage';



class App extends React.Component {

	 _renderScreen = (route) => {

    switch(route) {
      case 'music':
        return <MusicPage {...this.props}/>;
      case 'homepage':
      default:
        return <HomePage {...this.props}/>;
    }

  }

		render() {
			  return (
		      <div>
		        <Switch>
		          <Route 
		            exact 
		            path="/homepagez" 
		            component={() => this._renderScreen('homepage')}/>
		          <Route 
		            path="/music" 
		            component={() => this._renderScreen('music')}/>
		   
		          <Redirect to="/homepagez"/>
		        </Switch>
		      </div>

	  );
	}
}


export default App;
