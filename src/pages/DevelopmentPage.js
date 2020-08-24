import React, { Component } from 'react';
import styled from 'styled-components';
import { Blurb, Image } from '../components';
import colors from '../colors/colors';
import logo from './react.png';
import background from '../colors/background.jpg';

const Home = styled.main`
	height: 100vh;
`;

const Development = styled.div`
	width: 100%;
	background-color: ${colors.beauBlue};
	font-weight: 800;
  font-family: Helvetica;
  
	font-size: 48px;
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
				<Image alt="" src={background} />
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
				<img alt="" style={{height: '200px', borderRadius: '20px'}}src={logo} />
				</ContentWrapper>
			</Home>
		)
	}
};

export default DevelopmentPage;