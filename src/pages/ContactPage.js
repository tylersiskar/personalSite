import React, { Component } from 'react';
import styled from 'styled-components';
import { LinkGroup } from '../components/Links';
import colors from '../colors/colors';
import { Button, Blurb, ColorDial } from '../components';

const Home = styled.div`
	position: relative;
	display: flex;
	height: 100%;
	overflow: hidden;
	@media (min-width: 320px) and (max-width: 967px) {
		height: 100%;
		overflow: auto;
		background-position: center;
		background-size: cover;
		background-image: url(${({ src }) => src});
	}
`;

const LeftMain = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	min-width: 200px;
	width: 50%;
	flex-direction: column;
	background-color: ${({ background }) => background};
	@media (min-width: 320px) and (max-width: 967px) {
		position:absolute;
		z-index: 5;
		left: ${({ showLinks }) => showLinks ? 0 : -50}%;
	}
	@media (min-width: 967px) {
		position: relative;
	}
`;

const OpenButton = styled(Button)`
	position: relative;
	border-radius: 0px;
	width: 50px;
	height: 50px;
	background-image: 	linear-gradient(to bottom, ${({ background }) => background} 0%, white 90%);
	left: ${({ showLinks }) => showLinks ? 200 : 0}px;
	z-index: 2;
	transform: rotate(${({ showLinks }) => showLinks ? 90 : -90}deg);
	@media (min-width: 967px) {
		display: none;
	}
`;


const RightMain = styled.div`
	position: relative;
	padding-top: 32px;
	width: 50%;
	height: 100%;
	overflow: auto;
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
	  height: 4em;
	}
	@media (min-width: 320px) and (max-width: 967px) {
		background-image: none;
		overflow: visible;
		width: 100%;
	}
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


const LinkGroupContainer = styled.span`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	padding-bottom: 50px;
`;

class ContactPage extends Component {
	state = {
		showLinks: false
	}

	_onClickColor = (background) => {
		this.props.onClickColor(background);
	}

	render() {
		let content1 = `Thank you for visiting! Suggestions? Email me at tyler.siskar@gmail.com`;
			return(
				<Home src={this.props.src}>
					<LeftMain 
						showLinks={this.state.showLinks} 
						mount={this.state.mounted}
						background={this.props.background} >
						<LinkGroupContainer>
							 <LinkGroup activeRoute="contact" links={this.props.links} />
						</LinkGroupContainer>
						<ColorDial background={this.props.background} colorDial={this.props.colors} onClick={this._onClickColor}/>
					</LeftMain>
					<OpenButton onClick={() => this.setState({ showLinks: !this.state.showLinks})} showLinks={this.state.showLinks} textColor={colors.darkGray} background={this.props.background}/> 
					<RightMain src={this.props.src}>
						<Content>
						<Blurb width='75%' backgroundColor="white" borderColor={this.props.background} fontColor={this.props.background}>
						{content1}
						</Blurb>
						</Content>
					</RightMain>
				</Home>
		)
	}
};


export default ContactPage;