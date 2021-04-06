import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button from '../Button';
import { Title, Body } from '../../components';
import LogoMenu from '../LogoMenu';

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

const PopUpNav = styled.nav`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100vw;
	height: 100%;
	position: fixed;
	z-index: 999;
	overflow: hidden;
  background-color: ${({ background }) => background};
  ${({ open }) => open && css`
  	animation: ${animateIn} 0.35s linear;
  `};

  ${({ open }) => !open && css`
  	animation: ${animateOut} 0.35s linear;
  `};
`;


const NavHeader = styled.div`
	display: flex;
  background-color: ${({ background }) => background};
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
	@media screen and (max-width: 767px) {
		justify-content: flex-start;
	}
`;

const Subtitle = styled.span`
	display: flex;
	justify-content: center;
	width: 100%;
	text-align: center;
	padding: 16px 0 24px 0;
`;
class MenuNav extends React.Component {
	
	_onClick = (e) => {	
		this.props.onClick && this.props.onClick();
	}

	render() {
		return(
			<PopUpNav open={this.props.open} background={this.props.background}>
					<NavHeader background={this.props.background}>
						<Button type="close" onClick={this._onClick}/>
					</NavHeader>
					<TextWrapper>
						<Title size="large" bold>Reach out.</Title>
						<Subtitle>
							<Body size="large">Your web and mobile solutions are only a click away. Contact me or check out my resume by clicking the icons below.</Body>
						</Subtitle>
						<div style={{paddingBottom: 16}}><Title size="small">TYLER<b>SISKAR</b></Title></div>
						<LogoMenu color="white"/>
					</TextWrapper>
			</PopUpNav>
		)
	}
};


export default MenuNav;