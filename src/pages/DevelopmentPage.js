import React, { Component } from 'react';
import styled from 'styled-components';
import { Header, Blurb } from '../components';
import colors from '../colors/colors';
import logo from './react.png';

const Home = styled.main`
	height: 100vh;
`;

const Development = styled.div`
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


class DevelopmentPage extends Component {

	render() {


		return(
			<Home>
				<ContentWrapper>
				<Development>
				Developing & Software Experience
				</Development>
				<Blurb title="Programming Languages" fontSize={20}>
					React, React Native, Java, Python
				</Blurb>
				<Blurb title="Projects" fontSize={20} backgroundColor={colors.forestGreen}>
					Verizon Design System, Burner Mobile App, Finta Web App, Personal Website, Budgeting App from college, Social Media App 
				</Blurb>
				<img style={{height: '200px', borderRadius: '20px'}}src={logo} />
				</ContentWrapper>
			</Home>
		)
	}
};

export default DevelopmentPage;