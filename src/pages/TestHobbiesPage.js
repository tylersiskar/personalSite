import React, { Component } from 'react';
import styled from 'styled-components';
import { Blurb } from '../components';
import { Link } from 'react-router-dom';
import colors from '../colors/colors';
import logo from '../images/avengers.jpg';

const Home = styled.main`
	height: 100vh;
	position: relative;
	display: flex;

`;

const LeftMain = styled.div`
	display: flex;
	position: relative;
	width: 50%;
	transition: width .35s ease;
	${({ mount }) => mount && `
		width: 25%;
	`};
	height: 100%;
	background-color: ${colors.forestGreen};
	flex-direction: column;

`;

const RightMain = styled.div`
	display: flex;
	position: relative;
	width: 50%;
	transition: width .35s ease;
	${({ mount }) => mount && `
		width: 75%;
	`};
	height: 100%;
	background-color: white;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

const StyledLink = styled(Link)`
	color: ${({ yes }) => yes ? 'lightgray' : 'white'};
	font-size: 44px;
	text-decoration: none;
	position: relative;
	padding-left: 44px;
	left: 0;
	transition: left .35s ease;
	&:hover {
		opacity: 0.7;
		left: 32px;
	}
`;


const Content = styled.div`
	display: flex;
	color: ${colors.forestGreen};
	padding: 0 44px;
`;


const StyledImage = styled.img`
	height: 200px;
	border-radius: 20px;
`;



class TestDevelopmentPage extends Component {
	state = {
		mounted: false
	}
	componentDidMount() {
		setTimeout(() => this.setState({ mounted: true }), 10);
	}
	render() {

		return(
				<Home>
					<LeftMain mount={this.state.mounted}>
					<StyledLink to="/personal"> personal </StyledLink>
					<StyledLink  to="/development"> development </StyledLink>
					<StyledLink yes to="/hobbies"> hobbies </StyledLink>
					</LeftMain>
					<RightMain mount={this.state.mounted}>
						<Content>
							<Blurb title="Sports" fontSize={20} backgroundColor={colors.powderBlue}>
								I'm a lifelong Bills fan, and am excited about the upcoming season! I enjoy playing recreational basketball, golf, and baseball. 
							</Blurb>
							<Blurb title="Movies" fontSize={20} backgroundColor={colors.gold}>
								I'm a huge Marvel fan, I've seen all the movies multiple times. Interstellar is also one of my favorite movies.
							</Blurb>
							<Blurb title="Music" fontSize={20} backgroundColor={colors.nyanza} >
								Most of my music interest lies in hip-hop/rap music, but I have been listening to more pop lately. Favorite artists: J Cole, Kendrick Lamar, Drake. Lately I've listened to Harry Styles' and Justin Bieber's latest albums. 
							</Blurb>
						</Content>
				 		<StyledImage src={logo} />
					</RightMain>
				</Home>
		)
	}
};


export default TestDevelopmentPage;