import React from 'react';
import styled from 'styled-components';
import { Blurb, LinkGroup } from '../components';
import colors from '../colors/colors';
import vine from '../images/vine.jpg';

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
	padding: 20px;
	width: auto;
	@media (min-width: 1272px) {
		flex-direction: row;
	}
	@media (min-width: 967px) and (max-width: 1272px) {
		font-size: 32px;
		flex-direction: row;
		
	}
	@media (min-width: 320px) and (max-width: 967px) {
		width: auto;
		flex-direction: column;
		font-size: 20px;
		
	}

`;

const ContactPage = props => {

	let content1 = `Thank you for visiting! Suggestions? Email me at tyler.siskar@gmail.com`;
		return(
				<Home>
					<LeftMain>
						<LinkGroup activeRoute="contact"/>
					</LeftMain>
					<RightMain src={vine}>
						<Content>
						<Blurb width='75%' backgroundColor="white" borderColor={colors.forestGreen}>
						{content1}
						</Blurb>
						</Content>
					</RightMain>
				</Home>
		)
};


export default ContactPage;