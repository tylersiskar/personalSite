import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Title, Subtitle, LogoMenu, CloseButton } from '../components';

const animateIn = keyframes `
	0% {
		opacity: 0;
		transform: translateY(-100%);
	}
	100% {
		opacity: 1;
		transform: translateY(0%);
	}
`;

const animateOut = keyframes `
	0% {
		opacity: 1;
		transform: translateY(0%);
	}
	100% {
		opacity: 0;
		transform: translateY(-100%);
	}
`;

const PopUpNav = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 999;
	overflow: hidden;
  background-color: black;
  ${({ open }) => open && css`
  	animation: ${animateIn} 0.35s linear;
  `};

  ${({ open }) => !open && css`
  	animation: ${animateOut} 0.35s linear;
  `};
`;


const NavHeader = styled.div`
	display: flex;
  background-color: black;
	padding-bottom: 15px;
	justify-content: flex-end;
  z-index: 999;
	padding: 24px;
	box-sizing: border-box;
	width: 100%;
	@media screen and (max-width: 767px) {
		padding: 16px;
	}
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50vw;
	height: 100%;
	justify-content: center;
	text-align: center;
`;

const ContactModal = ({ open, onClick }) => {
	if(open) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "auto";
	}
	return(
		<PopUpNav open={open} >
		<NavHeader> <CloseButton onClick={onClick} /> </NavHeader>
				<TextWrapper>
				<div style={{padding: "16px 0"}}>
					<Title size="xxLarge" bold color="white">Reach out.</Title>
					</div>
					<Subtitle size="medium" color="white">
					Your web and mobile solutions are only a click away. Contact me or check out my resume by clicking the icons below.
					</Subtitle>
					<div style={{padding: "16px 0"}}><Title size="medium" color="white">tyler<b>siskar</b></Title></div>
					<LogoMenu color="white"/>
				</TextWrapper>
		</PopUpNav>
	)
};


export { ContactModal };

