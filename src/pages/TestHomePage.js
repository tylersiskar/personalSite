import React from 'react';
import styled from 'styled-components';
import { LinkGroup } from '../components';
import colors from '../colors/colors';
import me from '../images/me.jpg';

const Home = styled.main`
	height: 100vh;
	position: relative;
	display: flex;

`;

const LeftMain = styled.div`
	display: flex;
	position: relative;
	width: 50%;
	min-width: 200px;
	height: 100%;
	background-color: ${colors.forestGreen};
	flex-direction: column;
`;

const RightMain = styled.div`
	display: flex;
	position: relative;
	width: 50%;
	height: 100%;
	background-color: white;
	flex-direction: column;
	justify-content: center;

`;

const Content = styled.div`
	color: ${colors.forestGreen};
	font-size: 44px;
	width: 60%;
	padding-left: 30%;
	font-family: Helvetica;
	padding-bottom: 32px;
	@media (min-width: 767px) {
		flex-direction: row;
	}
	@media (min-width: 320px) and (max-width: 767px) {
		flex-direction: column;
		font-size: 24px;
	}
`;

const StyledImage = styled.img`
	z-index: 1;
		position: absolute; 
		bottom: 20%;
	@media (min-width: 767px) {
		left: 35%;
		width: 25%;
	}
	@media (min-width: 320px) and (max-width: 767px) {
		width: 50%;
		left: 0;
	}
`;

const TestHomePage = props => {

	let content1 = `Hello! My name is Tyler Siskar, welcome to my site.`;
	let content2 = 'Click the links on the left to learn more about me!';
		return(
				<Home>
					<StyledImage alt="" src={me} />
					<LeftMain>
						<LinkGroup />
					</LeftMain>
					<RightMain>
						<Content>
						{content1}
						</Content>
						<Content>
						{content2}
						</Content>
					</RightMain>
				</Home>
		)
};


export default TestHomePage;