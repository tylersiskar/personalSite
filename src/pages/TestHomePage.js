import React from 'react';
import styled from 'styled-components';
import { Blurb } from '../components';
import { LinkGroup } from '../components/Links';
import colors from '../colors/colors';
import vine from '../images/plant.jpg';
import me from '../images/me.jpg';

const Home = styled.div`
	height: 100%;
	position: relative;
	display: flex;
	overflow: hidden;
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
	flex-direction: column;
	justify-content: center;
	background-position: center;
	background-size: cover;
	background-image: url(${({ src }) => src});
	&::after {
	  content: "";
	  position: absolute;
	  z-index: 1;
	  top: 0;
	  left: 0;
	  pointer-events: none;
	  background-image: linear-gradient(to top, 
	                    rgba(255,255,255, 0), 
	                    rgba(255,255,255, 1) 90%);
	  width: 100%;
	  height: 5em;

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
						<LinkGroup links={props.links} />
					</LeftMain>
					<RightMain src={vine}>
						<Content>
						<Blurb backgroundColor={colors.white} borderColor={colors.forestGreen} width="100%" >
						{content1}
						</Blurb>
						</Content>
						<Content>
						<Blurb backgroundColor={colors.white} borderColor={colors.forestGreen}  width='100%'>
						{content2}
						</Blurb>
						</Content>
					</RightMain>
				</Home>
		)
};


export default TestHomePage;