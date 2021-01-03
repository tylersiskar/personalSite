import React from 'react';
import styled from 'styled-components';
import { Blurb, ColorDial, Body } from '../components';
import { LinkGroup } from '../components/Links';
import colors from '../colors/colors';
import me from '../images/me.jpg';
import meBlue from '../images/meblue.jpg';
import meBlack from '../images/grey.jpg';
import meYellow from '../images/mesunset.jpg';
import 'aos/dist/aos.css';

const Home = styled.div`
	height: 100%;
	position: relative;
	display: flex;
	overflow: hidden;
`;

const LeftMain = styled.div`
	display: flex;
	position: relative;
	width: 50%;
	min-width: 200px;
	height: 100%;
	background-color: ${({ background }) => background};
	flex-direction: column;
	align-items: flex-start;
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

const LinkGroupContainer = styled.span`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	padding-bottom: 20px;
`;

const DialContainer = styled.span`
	display: flex;
	position: relative;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	padding-left: 44px;
	@media screen and (max-width: 767px) {
		padding-left: 16px;
	}
	@media screen and (max-width: 544px) {
		padding-left: 0;
		justify-content: center;
	}
`;


const StyledA = styled.a`
	&:hover {
		color: ${({ background }) => background};
	}
`;

const HomePage = props => {
	let content1 = `Hello, I am Tyler Siskar, a web and mobile developer.`;
	let content2 = `Thank you for visiting! Contact me `;
	const { background, contact} = props;
	function _onClickColor(background) {
		props.onClickColor(background);
	}

	function _chooseColor() {
		switch(props.background) {
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
	return(
		<Home>
			<StyledImage 
			    data-aos="fade-up"
			    data-aos-offset="200"
			    data-aos-delay="50"
			    data-aos-duration="500"
			    data-aos-easing="ease-in-out"
			    data-aos-mirror="true"
			    data-aos-once="false"
			    data-aos-position="center"
		    	alt="" src={_chooseColor()} />
			<LeftMain background={props.background}>
				<LinkGroupContainer>
					<LinkGroup links={props.links} />
				</LinkGroupContainer>
				<DialContainer>
					<ColorDial background={props.background} colorDial={props.colors} onClick={_onClickColor}/>
				</DialContainer>
			</LeftMain>
			<RightMain src={props.src}>
				<Content>
					<Blurb backgroundColor={colors.white} fontColor={background} borderColor={background} width="100%" >
					{contact ? 
						<Body size="xLarge" color={background}>
						{content2}
							<StyledA background={background} href="mailto:tyler.siskar@gmail.com">
							here
							</StyledA>
						</Body> 
						: content1}
					</Blurb>
				</Content>
			</RightMain>
		</Home>
	)
};


export default HomePage;