import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../colors/colors';

const Home = styled.main`
	height: 100vh;
	position: relative;
	display: flex;

`;

const LeftMain = styled.div`
	display: flex;
	position: relative;
	width: 50%;
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

const StyledLink = styled(Link)`
	color: white;
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
	color: ${colors.forestGreen};
	font-size: 44px;
	width: 60%;
	padding-left: 44px;
	padding-bottom: 32px;

`;



const TestHomePage = props => {

	let content1 = `Hello! My name is Tyler Siskar, welcome to my site.`;
	let content2 = 'Click the links on the left to learn more about me!';
		return(
				<Home>
					<LeftMain>
					<StyledLink to="/personal"> personal </StyledLink>
					<StyledLink to="/development"> development </StyledLink>
					<StyledLink to="/hobbies"> hobbies </StyledLink>
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