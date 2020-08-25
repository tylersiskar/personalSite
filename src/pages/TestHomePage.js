import React from 'react';
import styled from 'styled-components';
import { Blurb, Image } from '../components';

import { Link } from 'react-router-dom';
import colors from '../colors/colors';
import background from '../colors/background.jpg';

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

const MiddleRow = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
`;

const StyledLink = styled(Link)`
	color: white;
	font-size: 44px;
	text-decoration: none;
	position: relative;
	padding-left: 44px;
	left: 0;
	&:hover {
		opacity: 0.7;
		left: 32px;
		transition: left .35s linear;
	}
`;

const Content = styled.div`
	color: ${colors.forestGreen};
	font-size: 44px;
	width: 60%;
	padding-left: 44px;

`;



const TestHomePage = props => {

	let content1 = `Hello! My name is Tyler Siskar, welcome to my page!`;
	let content2 = 'I am a React Developer who is in the process of making his own website.';
	let content3 = 'In the header, there are links to other sections where you\'ll learn more about me. In the top right you can access my social media on Facebook or Twitter. Enjoy!';
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
					</RightMain>
				</Home>
		)
};


export default TestHomePage;