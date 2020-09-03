import React from 'react';
import { Route,
         Switch,
         Redirect }             from "react-router-dom";
import styled from 'styled-components';
import colors from './colors/colors';
import TestHomePage from './pages/TestHomePage';
import TestPersonalPage from './pages/TestPersonalPage';
import TestHobbiesPage from './pages/TestHobbiesPage';
import TestDevelopmentPage from './pages/TestDevelopmentPage';
import ContactPage from './pages/ContactPage';
import { TestHeader } from './components';
import code from './images/code.jpg';
import react from './images/react.png';
import buffalo from './images/buffalo.jpg';
import ubbull from './images/ubbull.jpg';
import ironman from './images/ironman.jpg';
import amsterdam from './images/amsterdam.jpg';
import music from './images/music.jpeg';
import bills from './images/bills.png';

const Page = styled.div`
	background-image: 
	${({ page }) => page === 'homepage' || page === 'contact' 
		? 
		`linear-gradient(to right, ${colors.forestGreen} 50%, white 50%)`
		: 
		`linear-gradient(to right, ${colors.forestGreen} 25%, white 25%)`
	};
	position: absolute;
	bottom: 0;
	top: 0;
	left: 0;
	right: 0;
	overflow: hidden;
`;

const links = [ 
	{
		route: 'about',
		to: '/personal'
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

const travelString = "After graduating from college, I went on a trip to Europe with a few friends, where we backpacked through 12 cities in 30 days. Watch a video of that trip ";

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
		image: bills
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
				description: 'Most of my music interest lies in hip-hop/rap music. Favorite artists: J Cole, Kendrick Lamar, and Drake.'
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
		image: music
	},
	{
		title: 'travel',
		content: [
			{
				header: "Europe",
				description: travelString,
				href: "https://www.youtube.com/watch?v=1zCL-0_mA90&feature=youtu.be&fbclid=IwAR0G1NA-GTNC3LUPsMfQfeSfqJUmJMTkzsz3GT4YCnJNhQznYW6NOe0WIQs",
				link: "here"
			},
			{
				header: "Colombia",
				description: "I visited Colombia for 3 weeks this past winter",
			},
			{
				header: "Study Abroad",
				description: "In Summer 2016 I particiapted in a 6 week study abroad program in France",
			},
		],
		image: amsterdam
	}
];
class App extends React.Component {

 _renderScreen = (route) => {
    switch(route) {
      case 'personal':
        return( <Page page={route}>
					<TestHeader active={route} />
					<TestPersonalPage {...this.props} cards={personalContent} links={links}/>
				</Page>);
      case 'development':
        return( <Page page={route}>
					<TestHeader active={route}/>
					<TestDevelopmentPage {...this.props} cards={developmentContent} links={links}/>
				</Page>);
      case 'hobbies':
        return( <Page page={route}>
					<TestHeader  active={route}/>
					<TestHobbiesPage {...this.props} cards={hobbiesContent} links={links}/>
				</Page>);
      case 'contact':
        return( <Page page={route}>
					<TestHeader  active={route}/>
					<ContactPage {...this.props} links={links}/>
				</Page>);
      case 'homepage':
      default:
        return( <Page page={route}>
					<TestHeader  active={route}/>
					<TestHomePage {...this.props} links={links}/>
				</Page>);
		}

  }

		render() {
			  return (
		        <Switch>
		          <Route 
		            path="/homepage" 
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
		          <Route 
		            path="/contact" 
		            component={() => this._renderScreen('contact')}/>
		   		  <Redirect to="/homepage"/>
		        </Switch>

	  );
	}
}


export default App;
