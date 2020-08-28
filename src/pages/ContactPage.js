import React from 'react';
import styled from 'styled-components';
import { LinkGroup } from '../components';
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
	padding-left: 32px;
	@media (min-width: 767px) {
		flex-direction: row;
	}
	@media (min-width: 320px) and (max-width: 767px) {
		flex-direction: column;
		
	}

`;

const ContactPage = props => {

	let content1 = `Thank you for visiting! Suggestions? Email me at tyler.siskar@gmail.com`;
		return(
				<Home>
					<LeftMain>
						<LinkGroup activeRoute="contact"/>
					</LeftMain>
					<RightMain>
						<Content>
						{content1}
						</Content>
					</RightMain>
				</Home>
		)
};


export default ContactPage;