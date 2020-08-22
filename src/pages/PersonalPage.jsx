import React, { Component } from 'react';
import styled from 'styled-components';
import { Header, Blurb } from '../components';
import colors from '../colors/colors';

const Home = styled.main`
	background-color: ${colors.mintCream};
	height: 100vh;
`;

const Personal = styled.div`
	width: 100%;
	background-color: ${colors.beauBlue};
	opacity: 0.6;
	font-weight: 800;
	font-family: Impact;
	font-size: 64px;
`;

const ContentWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;


class PersonalPage extends Component {
	state = {
	}

	render() {


		return(
			<Home>
			<Header />
				<ContentWrapper>
				<Personal>
				This is where i will talk about myself
				</Personal>
				<Blurb title="Where I am from" fontSize={20} backgroundColor={colors.nyanza}>
				I currently live in Clarence Center, New York and have lived in the WNY area my entire life.
				</Blurb>
				<Blurb title="Education" fontSize={20} backgroundColor={colors.morningBlue}>
				 I went to Clarence High School and the University at Buffalo for undergrad, where I completed a degree in Computational Physics with a Mathematics minor. Fun fact: I originally started as a Civil Engineer, but eventually found my path to the developing world.
				 </Blurb>
				</ContentWrapper>
			</Home>
		)
	}
};

export default PersonalPage;