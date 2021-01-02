import React, { Component } from 'react';
import styled from 'styled-components';
import { LinkGroup } from '../components/Links';
import { Body } from '../components/Typography';
import colors from '../colors/colors';
import me from '../images/me.jpg';
import meBlue from '../images/meblue.jpg';
import meBlack from '../images/grey.jpg';
import meYellow from '../images/mesunset.jpg';
import { Blurb, ColorDial } from '../components';

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

const StyledImage = styled.img`
	z-index: 1;
	position: absolute; 
	bottom: 20%;
	border-radius: 5px;
		min-height: 200px;
	box-shadow: 1px 2px 3px rgba(0,0,0,.5);	
	@media (min-width: 767px) {
		left: 35%;
		width: 25%;
	}
	@media (max-width: 767px) {
		width: 50%;
		left: 0;
		top: 35%;
	}
`;
const LeftMain = styled.div`
	display: flex;
	align-items: flex-start;
	position: relative;
	min-width: 200px;
	width: 50%;
	flex-direction: column;
	background-color: ${({ background }) => background};
	@media (min-width: 320px) and (max-width: 967px) {
		position:absolute;
		z-index: 5;
		align-items: center;
		left: ${({ showLinks }) => showLinks ? 0 : -50}%;
	}
	@media (min-width: 967px) {
		position: relative;
	}

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
	  height: 4em;
	}

`;

const Content = styled.div`
	font-size: 44px;
	width: 60%;
	padding-left: 30%;
	font-family: Jura;
	padding-bottom: 32px;
	@media (min-width: 767px) {
		flex-direction: row;
	}
	@media (min-width: 320px) and (max-width: 767px) {
		flex-direction: column;
		font-size: 24px;
		padding-left: 12px;
	}
`;

const LinkGroupContainer = styled.span`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	padding-bottom: 20px;
`;

const StyledA = styled.a`
	&:hover {
		color: ${({ background }) => background};
	}
`;
const DialContainer = styled.span`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	padding-left: 44px;
	@media screen and (max-width: 767px) {
		padding-left: 20px;
	}
`;

class ContactPage extends Component {
	state = {
		showLinks: false
	}

	_onClickColor = (background) => {
		this.props.onClickColor(background);
	}
	_chooseColor = () => {
		switch(this.props.background) {
			case colors.gold:
				return meYellow;
			case colors.beauBlue:
				return meBlue;
			case colors.black:
				return meBlack;
			case colors.forestGreen:
			default:
				return me;
		}
	}

	render() {
		let content1 = `Thank you for visiting! Contact me `;

			return(
				<Home src={this.props.src}>
					<StyledImage 
					    data-aos="fade-up"
					    data-aos-offset="200"
					    data-aos-delay="50"
					    data-aos-duration="500"
					    data-aos-easing="ease-in-out"
					    data-aos-mirror="true"
					    data-aos-once="false"
					    data-aos-position="center"
				    	alt="" src={this._chooseColor()} />
					<LeftMain 
						showLinks={this.state.showLinks} 
						mount={this.state.mounted}
						background={this.props.background} >
						<LinkGroupContainer>
							 <LinkGroup activeRoute="contact" links={this.props.links} />
						</LinkGroupContainer>
						<DialContainer>
							<ColorDial background={this.props.background} colorDial={this.props.colors} onClick={this._onClickColor}/>
						</DialContainer>
					</LeftMain>
					<RightMain src={this.props.src}>
						<Content>
						<Blurb width='75%' backgroundColor="white" borderColor={this.props.background} fontColor={this.props.background}>
						<Body size="xLarge" color={this.props.background}>{content1}<StyledA background={this.props.background} href="mailto:tyler.siskar@gmail.com">here</StyledA></Body>
						</Blurb>
						</Content>
					</RightMain>
				</Home>
		)
	}
};


export default ContactPage;