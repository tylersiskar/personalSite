import React, { Component } from 'react';
import styled from 'styled-components';
import { Header, Blurb, Image } from '../components';
import colors from '../colors/colors';
import logo from './ubbull.jpg';
import background from '../colors/background.jpg';

const Home = styled.main`
	width: 100vw;
	height: 100vh;
`;

const Personal = styled.div`
	width: 100%;
	background-color: ${colors.beauBlue};
	font-weight: 800;
	font-family: Impact;
	font-size: 64px;
	text-align: center;
`;

const ContentWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const StyledImage = styled.img`
	height: 200px;
	border-radius: 20px;
`;


class PersonalPage extends Component {
	state = {
	}

	render() {


		return(
			<Home>
				<Image src={background} />
				<ContentWrapper>
				<Personal>
				Background & Education
				</Personal>
				<Blurb title="Where I am from" fontSize={20} backgroundColor={colors.nyanza}>
				I currently live in Clarence Center, New York and have lived in the WNY area my entire life.
				</Blurb>
				<Blurb title="Education" fontSize={20} backgroundColor={colors.morningBlue}>
				 I went to Clarence High School and the University at Buffalo for undergrad, where I completed a degree in Computational Physics with a Mathematics minor. Fun fact: I originally started as a Civil Engineer, but eventually found my path to the developing world.
				 </Blurb>
				 <StyledImage src={logo} />
				</ContentWrapper>
			</Home>
		)
	}
};

export default PersonalPage;