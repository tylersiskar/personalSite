import React from 'react';
import { Route,
         Switch,
         Redirect }             from "react-router-dom";

import TestHomePage from './pages/TestHomePage';
import TestPersonalPage from './pages/TestPersonalPage';
import TestHobbiesPage from './pages/TestHobbiesPage';
import TestDevelopmentPage from './pages/TestDevelopmentPage';
import { TestHeader } from './components';

const developmentData =  [
  {
    type: 'dropdown',
    children: 'React',
    projects: [
      "Verizon Design System",
      "Finta",
      "Personal Website"
      ]
  },
  {
    type: 'dropdown',
    children: 'React Native',
    projects: [
      "Burner",
      "Social Media App",
      ]
  },
  {
    type: 'dropdown',
    children: 'Java',
    projects: [
      "Budgeting App",
      "CS Courses",
      "Teaching",
      ]
  },
  {
    type: 'dropdown',
    children: 'Python',
    projects: [
      "Physics / Math courses",
      "Teaching",
      ]
  }
];

class App extends React.Component {

 _renderScreen = (route) => {
    switch(route) {
      case 'personal':
        return( <React.Fragment>
					<TestHeader active={route} />
					<TestPersonalPage {...this.props}/>
				</React.Fragment>);
      case 'development':
        return( <React.Fragment>
					<TestHeader active={route} sideNavData={developmentData}/>
					<TestDevelopmentPage {...this.props}/>
				</React.Fragment>);
      case 'hobbies':
        return( <React.Fragment>
					<TestHeader  active={route}/>
					<TestHobbiesPage {...this.props}/>
				</React.Fragment>);
      case 'homepage':
      default:
        return( <React.Fragment>
					<TestHeader />
					<TestHomePage {...this.props}/>
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
