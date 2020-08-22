import React from 'react';
import { Route,
         Switch,
         Redirect }             from "react-router-dom";

import HomePage from './pages/HomePage';
import PersonalPage from './pages/PersonalPage';
import HobbiesPage from './pages/HobbiesPage';
import DevelopmentPage from './pages/DevelopmentPage';
import { SideNav, Header } from './components';



class App extends React.Component {

 _renderScreen = (route) => {
    switch(route) {
      case 'personal':
        return( <React.Fragment>
					<Header />
					<PersonalPage {...this.props}/>
				</React.Fragment>);
      case 'development':
        return( <React.Fragment>
					<Header />
					<DevelopmentPage {...this.props}/>
				</React.Fragment>);
      case 'hobbies':
        return( <React.Fragment>
					<Header />
					<HobbiesPage {...this.props}/>
				</React.Fragment>);
      case 'homepage':
      default:
        return( <React.Fragment>
					<Header />
					<HomePage {...this.props}/>
				</React.Fragment>);
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
