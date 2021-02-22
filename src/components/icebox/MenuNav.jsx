import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import colors from '../../colors/colors';
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
	height: 100vh;
	position: fixed;
	z-index: 999;
	overflow: hidden;
  background-color: ${colors.forestGreen};
  animation: ${animateIn} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
${({ unmounted }) =>
!unmounted &&
css`
  animation: ${animateOut} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
`}
`;


const NavHeader = styled.div`
	display: flex;
  background-color: ${colors.forestGreen};
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
		this.setState({ mounted: false})		
		this.props.onClick();
	}

	render() {
		return(
			<PopUpNav unmounted={this.props.open}>
					<NavHeader>
						<Button type="close" onClick={this._onClick}/>
					</NavHeader>
					<TextWrapper>
						<Title size="xLarge" bold>Reach out.</Title>
						<Subtitle>
							<Body size="large">Your web and mobile solutions are only a click away. Contact me, check out my resume by clicking the icons below.</Body>
						</Subtitle>
						<div style={{paddingBottom: 16}}><Title size="small">TYLER<b>SISKAR</b></Title></div>
						<LogoMenu color="white"/>
					</TextWrapper>
			</PopUpNav>
		)
	}
};


export default MenuNav;