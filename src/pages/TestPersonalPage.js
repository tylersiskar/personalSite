import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Blurb } from '../components';
import colors from '../colors/colors';
import logo from '../images/ubbull.jpg';

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
	align-items: center;
	justify-content: space-around;
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
	width: 25%;
`;


class TestPersonalPage extends Component {
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
					<StyledLink yes to="/personal"> personal </StyledLink>
					<StyledLink to="/development"> development </StyledLink>
					<StyledLink to="/hobbies"> hobbies </StyledLink>
					</LeftMain>
					<RightMain mount={this.state.mounted}>
						<Content>
						<Blurb title="Hometown" fontSize={20} backgroundColor={colors.beauBlue}>
						I currently live in Clarence Center, New York and have lived in the WNY area my entire life.
						</Blurb>
						<Blurb title="Education" fontSize={20} backgroundColor={colors.nyanza}>
						 I went to Clarence High School and the University at Buffalo for undergrad, where I completed a degree in Computational Physics with a Mathematics minor. 
						 </Blurb>
						</Content>
				 		<StyledImage src={logo} />
					</RightMain>
				</Home>
		)
	}
};


export default TestPersonalPage;