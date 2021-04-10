import React from 'react';
import { Route,
         Switch,
         Redirect }             from "react-router-dom";
import styled from 'styled-components';
import colors from './colors/colors';
import HomePage from './pages/HomePage';
import PersonalPage from './pages/PersonalPage';
import { Header } from './components';
import code from './images/code.jpg';
import react from './images/mac.jpg';
import buffalo from './images/buffalo.jpg';
import ubbull from './images/ubbull.jpg';
import ironman from './images/ironman.jpg';
import golf from './images/golf.jpg';
import plant from './images/plant.jpg';
import blue from './images/bluepaint.jpg';
import coffee from './images/coffee.jpg';
import black from './images/black.jpg';
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
	@media screen and (max-width: 767px) {
		background-image: linear-gradient(to right, ${({ color }) => color} 50%, white 50%);
	}
`;

const colorDial = [
	colors.forestGreen,
	colors.beauBlue,
	colors.gold,
	colors.black
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
	}
];

const developmentContent = [
	{
		title: 'programming languages',
		content: 
		[
			{
				header: 'React',
				description: 'Used in the developing of Verizon Design System component library, personal websites, and Finta web application.'
			},
			{
				header: 'React Native',
				description: 'Used in the developing of component libraries and Burner mobile application.'
			},
			{
				header: 'Java',
				description: 'Primarily used in various CS courses, including one software development course where a budgeting application was created.'
			},
			{
				header: 'Python',
				description: 'Mostly used in Physics and Math courses, but also used in teaching at the Coder School Buffalo.'
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
				description: 'Develops feature updates on this online fundraising application '
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
				description: 'Born and raised in Buffalo, NY, where I also completed my undergraduate education at the University at Buffalo. Studied Computational Physics, but grew a passion for coding and web development.'
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

const travelString = "After graduating from college in May 2019, I went on a trip to Europe with a few friends, where we backpacked through 12 cities in 30 days. Watch a video of that trip here";

const hobbiesContent = [
	{
		title: 'sports',
		content: 
		[
			{
				header: 'watch',
				description: 'I am a lifelong fan of the Buffalo Bills, and support the Buffalo Sabres and New York Knicks.'
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
				description: 'Not only is this one of my favorite movies, but the soundtrack is also a favorite of mine.'
			},
			{
				header: 'harry potter',
				description: 'Having read all of the books early in my childhood, the movies have always been favorties of mine.'
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
				description: "In December 2019 I visited Colombia for 3 weeks, seeing Cartagena, Barranquilla and Santa Marta.",
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
  		case colors.black:
  			return black;
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
		case colors.black:
			return colors.black;
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
					<Header 
						active={route} 
						background={this.state.background}
						links={links}
						colors={colorDial}
						onClickColor={this._changeColor}/>
					<PersonalPage 
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
					<Header 
						active={route} 
						background={this.state.background}
						links={links}
						colors={colorDial}
						onClickColor={this._changeColor} />
					<PersonalPage 
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
					<Header  
						active={route} 
						background={this.state.background}
						links={links}
						colors={colorDial}
						onClickColor={this._changeColor}/>
					<PersonalPage 
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
      case 'homepage':
      default:
        return( <Page 
	        		page={route}
	        		color={this.state.background}>
					<Header  
						active={route} 
						background={this.state.background}
						links={links}
						colors={colorDial}
						onClickColor={this._changeColor}/>
					<HomePage 
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
		            path="/" 
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
		   		  <Redirect to="/"/>
		        </Switch>

	  );
	}
}


export default App;