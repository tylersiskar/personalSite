import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Title, Subtitle , RightArrow, Button } from '../components';
import { homeData } from '../data';
import { ContactModal } from './ContactModal';

const Page = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`;

const FlexRow = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
`;

const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledLink = styled.a`
	text-decoration: none;
	color: black;

	&:hover {
		opacity: 0.7;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
	position: absolute;
	top: 0;
	right: 0;
	padding: 32px;
	box-sizing: border-box;
	transition: all 0.35s ease;
	@media screen and (max-width: 767px) {
		padding: 16px;
	}
`;

const IconWrapper = styled.div`
	position: absolute;
	bottom: 15vh;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: rotate(90deg);
	&:hover {
		cursor: pointer;
	}
`;

const Rectangle = styled.div`
	height: 150px;
	width: 100vw;
	position: absolute;
	top: 100px;
	background-color: black;
	@media screen and (max-width: 1024px) {
		height: 7.5vh;
		top: 0;
	}
`;


const GrayRectangle = styled.div`
	height: 100vh;
	width: 150px;
	position: absolute;
	right: 100px;
	background-color: #d6d6d6;
	@media screen and (max-width: 1024px) {
		top: 0;
		right: 0;
		width: 7.5vw;
	}
`;

const VerticalRectangle = styled.div`
	height: 100vh;
	width: 150px;
	position: absolute;
	top: 100px;
	left: 100px;
	background-color: black;
	@media screen and (max-width: 1024px) {
		top: 0;
		left: 0;
		width: 7.5vw;
	}
`;

function _scrollToInfo(e) {
	document.getElementById('Bio').scrollIntoView({ behavior: "smooth" });
}

const Home = props => {
	const [ animate, animateContactPage ] = useState(false);
	const [ contactPage, showContactPage ] = useState(false);

	function _onOpen() {
		showContactPage(true)
		animateContactPage(true);
	}

	function _onClose() {
		animateContactPage(false);
		setTimeout(() => {
			showContactPage(false);
		}, 350)
	}

	return(
		<Page>
			<Rectangle />
			<GrayRectangle />
			<VerticalRectangle />
			{contactPage && <ContactModal open={animate} onClick={_onClose} />}
			<ButtonWrapper>
				<Button onClick={_onOpen} label="Contact"/>
			</ButtonWrapper>
			<FlexCol>
				<Title size="xxLarge" bold> Tyler Siskar </Title>
				<FlexRow>
					<Subtitle size="large" color="gray" style={{marginRight: 5}}>Frontend Web Developer</Subtitle> 
				</FlexRow>
			</FlexCol>
			<IconWrapper onClick={_scrollToInfo}>
				<RightArrow />
			</IconWrapper>
		</Page>
    )
}

export default Home;