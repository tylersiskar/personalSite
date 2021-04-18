import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Title, Subtitle , Button, Link, wheel } from '../components';
import { ContactModal } from './ContactModal';

const Page = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background-image: url(${wheel});
	background-position: center;
	background-size: cover;
`;

const FlexRow = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	padding-bottom: 96px;
`;

const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 32px;
	@media screen and (max-width: 767px) {
		padding-top: 10vh;
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

const LinkWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const Home = ({ data }) => {
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
			{contactPage && <ContactModal open={animate} onClick={_onClose} />}
			<ButtonWrapper>
				<Button onClick={_onOpen} label="Contact"/>
			</ButtonWrapper>
			<FlexCol>
				<Title size="xxLarge" bold color="white"> Tyler Siskar </Title>
				<FlexRow>
					<Subtitle size="large" color="gray" style={{marginRight: 5}}>Frontend Web Developer</Subtitle> 
				</FlexRow>
				<LinkWrapper>
				{data.map(item => <Link to={item.link} text={item.name} size="medium" bold color="white" />)}
				</LinkWrapper>
			</FlexCol>
		</Page>
    )
}

export default Home;