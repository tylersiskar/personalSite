import React from 'react';
import styled from 'styled-components';
import { Blurb, ColorDial } from '../components';
import { LinkGroup } from '../components/Links';
import colors from '../colors/colors';
import me from '../images/me.jpg';
import meBlue from '../images/meblue.jpg';
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
	font-family: Helvetica;
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
	@media (min-width: 767px) {
		min-height: 300px;
		left: 35%;
		width: 25%;
	}
	@media (min-width: 320px) and (max-width: 767px) {
		width: 50%;
		left: 0;
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
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	padding-left: 44px;
`;


const TestHomePage = props => {
	let content1 = `Hello! My name is Tyler Siskar, welcome to my site.`;
	let content2 = 'Click the links on the left to learn more about me!';
	const { background } = props;
	function _onClickColor(background) {
		props.onClickColor(background);
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
		    	alt="" src={props.background === colors.beauBlue ? meBlue : me} />
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
					{content1}
					</Blurb>
				</Content>
				<Content>
					<Blurb backgroundColor={colors.white} fontColor={background} borderColor={background}  width='100%'>
					{content2}
					</Blurb>
				</Content>
			</RightMain>
		</Home>
	)
};


export default TestHomePage;