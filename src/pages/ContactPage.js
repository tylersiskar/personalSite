import React, { Component } from 'react';
import styled from 'styled-components';
import { LinkGroup } from '../components/Links';
import colors from '../colors/colors';
import plant from '../images/plant.jpg';
import { Button } from '../components';
import { Blurb } from '../components';
import vine from '../images/plant.jpg';


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
	position: relative;
	min-width: 200px;
	width: 50%;
	flex-direction: column;
	background-color: ${colors.forestGreen};
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
	background-image: 	linear-gradient(to bottom, ${colors.forestGreen} 0%, white 90%);
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

class ContactPage extends Component {
	state = {
		showLinks: false
	}
	render() {
		let content1 = `Thank you for visiting! Suggestions? Email me at tyler.siskar@gmail.com`;
			return(
				<Home src={plant}>
					<LeftMain showLinks={this.state.showLinks} mount={this.state.mounted}>
						<LinkGroup activeRoute="about" links={this.props.links} />
					</LeftMain>
					<OpenButton onClick={() => this.setState({ showLinks: !this.state.showLinks})} showLinks={this.state.showLinks} textColor={colors.darkGray}/> 
					<RightMain src={vine}>
						<Content>
						<Blurb width='75%' backgroundColor="white" borderColor={colors.forestGreen} >
						{content1}
						</Blurb>
						</Content>
					</RightMain>
				</Home>
		)
	}
};


export default ContactPage;