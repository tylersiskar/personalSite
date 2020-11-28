import React from 'react';
import { Route,
         Switch,
         Redirect }             from "react-router-dom";
import styled from 'styled-components';
import colors from './colors/colors';
import TestHomePage from './pages/TestHomePage';
import TestPersonalPage from './pages/TestPersonalPage';
import ContactPage from './pages/ContactPage';
import { TestHeader } from './components';
import code from './images/code.jpg';
import react from './images/mac.jpg';
import buffalo from './images/buffalo.jpg';
import ubbull from './images/ubbull.jpg';
import ironman from './images/ironman.jpg';
import golf from './images/golf.jpg';
import plant from './images/plant.jpg';
import blue from './images/bluepaint.jpg';
import coffee from './images/coffee.jpg';
import AOS from 'aos';

import 'aos/dist/aos.css';

const Page = styled.div`
	background-image: 
	${({ page, color }) => page === 'homepage' || page === 'contact' 
		? 
		`linear-gradient(to right, ${color} 50%, white 50%)`
		: 
		`linear-gradient(to right, ${color} 25%, white 25%)`
	};
	position: absolute;
	bottom: 0;
	top: 0;
	left: 0;
	right: 0;
	overflow: hidden;
`;

const colorDial = [
	colors.forestGreen,
	colors.beauBlue,
	colors.gold
];

const links = [ 
	{
		route: 'about',
		to: '/about'
	},
	{
		route: 'development',
		to: '/development'
	},
	{
		route: 'hobbies',
		to: '/hobbies'
	},
	{
		route: 'contact',
		to: '/contact'
	}
];

const developmentContent = [
	{
		title: 'programming languages',
		content: 
		[
			{
				header: 'React',
				description: 'Used in the developing of personal website, Verizon Design System, and Finta web application.'
			},
			{
				header: 'React Native',
				description: 'Used in the developing of a social media app side project and Burner mobile application.'
			},
			{
				header: 'Java',
				description: 'Primarily used in various CS courses, including one software development course where a budgeting application was created.'
			},
			{
				header: 'Python',
				description: 'Primarily used in Physics and Math courses, but also used in teaching at the Coder School Buffalo.'
			}
		],
		image: react
	},
	{
		title: 'projects',
		content: [
			{
				header: 'Verizon Design System',
				description: 'Lead on the atomically designed component library that is currently implemented on Verizon\'s websites.'
			},
			{
				header: 'Finta Web App',
				description: 'Aid in feature updates on this online fundraising application '
			},
			{
				header: 'Burner',
				description: 'Assist in development of component library and created new pages.'
			},
			{
				header: 'Other projects',
				description: 'Social media mobile app, software development course budgeting app.'
			}	
		],
		image: code
	}
];

const personalContent = [
	{
		title: 'about me',
		content: 
		[
			{
				header: 'career',
				description: 'I am a React developer, whose experience primarily lies in front end development.'
			},
			{
				header: 'background',
				description: 'I currently live in Clarence Center, New York and have lived in the Buffalo area my entire life, as does most of my family'
			}
		],
		image: buffalo
	},
	{
		title: 'education',
		content: [
			{
				header: 'University at Buffalo',
				description: 'Completed B.S. in Computational Physics with a Mathematics minor.'
			},
			{
				header: 'University of Technology of Troyes',
				description: '6 week study abroad program in Troyes, France, where engineering, French, and history courses were taken.'
			},
			{
				header: 'Clarence High School',
				description: 'Completed high school education here.'
			}	
		],
		image: ubbull
	}
];

const travelString = "After graduating from college, I went on a trip to Europe with a few friends, where we backpacked through 12 cities in 30 days. Watch a video of that trip here";

const hobbiesContent = [
	{
		title: 'sports',
		content: 
		[
			{
				header: 'watch',
				description: 'I am a lifelong fan of the Buffalo Bills, and am excited for the upcoming season. I also am fans of the Buffalo Sabres, and New York Knicks.'
			},
			{
				header: 'play',
				description: 'I enjoy playing recreational golf, basketball, and football.'
			}

		],
		image: golf
	},
	{
		title: 'movies',
		content: [
			{
				header: 'avengers',
				description: 'The Marvel Cinematic universe are my favorite set of movies, I have seen them all multiple times.'
			},
			{
				header: 'interstellar',
				description: 'not only is this one of my favorite movies, but the soundtrack is also a favorite of mine.'
			}	
		],
		image: ironman
	},
	{
		title: 'music',
		content: [
			{
				header: 'hip-hop/rap',
				description: 'Most of my music interest lies in hip-hop/rap music. Favorite artists: J Cole, Kendrick Lamar, and Mac Miller.'
			},
			{
				header: 'alternative',
				description: 'Favorite artists: Young the Giant, Cage the Elephant, Milky Chance'
			},
			{
				header: 'other genres',
				description: 'pop, punk rock, instrumentals'
			}	
		],
		spotify: true
	},
	{
		title: 'travel',
		content: [
			{
				header: "Europe",
				description: travelString,
			},
			{
				header: "Colombia",
				description: "I visited Colombia for 3 weeks this past winter",
			},
			{
				header: "Study Abroad",
				description: "In Summer 2016 I participated in a 6 week study abroad program in France",
			},
		],
		href:"https://www.youtube.com/watch?v=1zCL-0_mA90&feature=youtu.be&fbclid=IwAR0G1NA-GTNC3LUPsMfQfeSfqJUmJMTkzsz3GT4YCnJNhQznYW6NOe0WIQs" 
	}
];
class App extends React.Component {
  state = {
  	background: colors.forestGreen,
  	showMobileNav: false
  };

  componentDidMount(){
    AOS.init();
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  };
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/*');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  _changeColor = (background) => {
  	this.setState({background: background});
  };

  _chooseCardContent = (page) => {
  	switch (page) {
  		case "development":
  			return developmentContent;
  		case "about":
  			return personalContent;
  		case "hobbies":
  		default:
  			return hobbiesContent;
  	}
  }

  _chooseBackground = () => {
  	const { background } = this.state;
  	switch (background) {
  		case colors.beauBlue:
  			return blue;
  		case colors.forestGreen:
  			return plant;
  		case colors.gold:
  		default:
  			return coffee;
  	}
  }

_chooseColor = () => {
	switch(this.state.background) {
		case colors.gold:
			return colors.orange;
		case colors.beauBlue:
			return colors.oxfordBlue;
		case colors.forestGreen:
		default:
			return colors.darkGray;
	}
}

_showMobileNav = (showNav) => {
	this.setState({ showMobileNav: showNav });
	return null;
}
 _renderScreen = (route) => {
    switch(route) {
      case 'about':
        return( <Page 
        		page={route} 
        		color={this.state.background}>
					<TestHeader 
						active={route} 
						background={this.state.background}
						links={links}
						colors={colorDial}
						onClickColor={this._changeColor}/>
					<TestPersonalPage 
						{...this.props} 
						activeRoute="about"
						src={this._chooseBackground()}
						cardBackground={this._chooseColor()}
						background={this.state.background} 
						colors={colorDial} 
						cards={this._chooseCardContent("about")} 
						links={links}
						onClickColor={this._changeColor}
						/>
				</Page>);
      case 'development':
        return( <Page page={route}
        		color={this.state.background}>
					<TestHeader 
						active={route} 
						background={this.state.background}
						links={links}
						colors={colorDial}
						onClickColor={this._changeColor} />
					<TestPersonalPage 
						{...this.props} 
						activeRoute="development"
						src={this._chooseBackground()}
						cardBackground={this._chooseColor()}
						background={this.state.background} 
						colors={colorDial} 
						cards={this._chooseCardContent("development")} 
						links={links} 
						onClickColor={this._changeColor}
						/>
				</Page>);
      case 'hobbies':
        return( <Page page={route}
        		color={this.state.background}>
					<TestHeader  
						active={route} 
						background={this.state.background}
						links={links}
						colors={colorDial}
						onClickColor={this._changeColor}/>
					<TestPersonalPage 
						{...this.props} 
						activeRoute="hobbies"
						src={this._chooseBackground()}
						cardBackground={this._chooseColor()}
						background={this.state.background} 
						colors={colorDial} 
						cards={this._chooseCardContent("hobbies")} 
						links={links}
						onClickColor={this._changeColor}
						/>
				</Page>);
      case 'contact':
        return( <Page page={route}
        		color={this.state.background}>
					<TestHeader  
						active={route} 
						background={this.state.background}
						links={links}
						colors={colorDial}
						onClickColor={this._changeColor}/>
					<ContactPage {...this.props} 
						src={this._chooseBackground()}
						background={this.state.background} 
						colors={colorDial} 
						links={links}
						onClickColor={this._changeColor}
						/>
				</Page>);
      case 'homepage':
      default:
        return( <Page 
	        		page={route}
	        		color={this.state.background}>
					<TestHeader  active={route} background={this.state.background}
						links={links}
						colors={colorDial}
						onClickColor={this._changeColor}/>
					<TestHomePage 
						{...this.props} 
						src={this._chooseBackground()}
						background={this.state.background} 
						colors={colorDial}
						links={links} 
						onClickColor={this._changeColor}
						/>
				</Page>);
		}

  }

		render() {
			  return (
		        <Switch>
		          <Route 
		          	exact
		            path="/homepage" 
		            component={() => this._renderScreen('homepage')}/>
		          <Route 
		          	exact
		            path="/about" 
		            component={() => this._renderScreen('about')}/>
		          <Route 
		          	exact
		            path="/development" 
		            component={() => this._renderScreen('development')}/>
		          <Route 
		          	exact
		            path="/hobbies" 
		            component={() => this._renderScreen('hobbies')}/>
		          <Route 
		          	exact
		            path="/contact" 
		            component={() => this._renderScreen('contact')}/>
		   		  <Redirect to="/homepage"/>
		        </Switch>

	  );
	}
}


export default App;
