import React from 'react';
import { Route,
         Switch,
         Redirect }             from "react-router-dom";

import HomePage from './pages/HomePage';
import PersonalPage from './pages/PersonalPage';
import HobbiesPage from './pages/HobbiesPage';
import DevelopmentPage from './pages/DevelopmentPage';



class App extends React.Component {

 _renderScreen = (route) => {
    switch(route) {
      case 'personal':
        return <PersonalPage {...this.props}/>;
      case 'development':
        return <DevelopmentPage {...this.props}/>;
      case 'hobbies':
        return <HobbiesPage {...this.props}/>;
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
		            path="/homepagez" 
		            component={() => this._renderScreen('homepage')}/>
		          <Route 
		            path="/personal" 
		            component={() => this._renderScreen('personal')}/>
		          <Route 
		            path="/development" 
		            component={() => this._renderScreen('development')}/>
		          <Route 
		            path="/hobbies" 
		            component={() => this._renderScreen('hobbies')}/>
		   		  <Redirect to="/homepagez"/>
		        </Switch>
		      </div>

	  );
	}
}


export default App;
