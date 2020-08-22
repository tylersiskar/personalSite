import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import colors from '../colors/colors';
import Blurb from '../components/Blurb';

const Home = styled.main`
	background-color: ${colors.mintCream};
	height: 100vh;
`;

const Development = styled.div`
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


class DevelopmentPage extends Component {

	render() {


		return(
			<Home>
			<Header />
				<ContentWrapper>
				<Development>
				This is where i will talk about my developing experience.
				</Development>
				<Blurb title="Programming Languages" fontSize={20}>
					React, React Native, Java, Python
				</Blurb>
				<Blurb title="Projects" fontSize={20} backgroundColor={colors.forestGreen}>
					Verizon Design System, Burner Mobile App, Finta Web App, Personal Website, Budgeting App from college, Social Media App 
				</Blurb>
				</ContentWrapper>
			</Home>
		)
	}
};

export default DevelopmentPage;