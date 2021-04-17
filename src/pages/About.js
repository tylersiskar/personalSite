import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Title, Subtitle , Button, Link, wheel, Header } from '../components';
import { ContactModal } from './ContactModal';

const Page = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	width: 100vw;
	min-height: 100vh;
	overflow: hidden;
	background-image: url(${wheel});
	background-position: center;
	background-size: cover;
`;

const About = props => {
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
			<Header onButtonClick={_onOpen} />
		</Page>
    )
}

export default About;