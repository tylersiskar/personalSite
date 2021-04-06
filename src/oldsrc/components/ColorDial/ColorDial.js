import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../colors/colors';
import { Body } from '../Typography';
import Shuffle from './Shuffle';

const DialWrapper = styled.span`
	display: flex;
	position: relative;
	align-items: center;
	color: ${({ color }) => colors.white};
	width: 200px;
	justify-content: center;
	height: 44px;
	padding: 0 16px;
	border-radius: 24px;
	background-color: transparent;
	opacity: 1;
	transition: all 0.35s ease;
	border: 1px solid ${({ color }) => color};
	@media screen and (max-width: 767px) {
		width: 100%;
		padding: 0 8px;
	}
`;

const ColorSwatch = styled.span`
	display: block;
	border-radius: 50%;
	height: 48px;
	width: 48px;
	background-color: ${({ color }) => color};
	border: ${({ selected }) => selected && `4px solid white`};
	margin-right: 12px;
	box-sizing: border-box;
	&:hover {
		border: 4px solid gray;
	}
`;

const SwatchGroupWrapper = styled.span`
	display: flex;
	padding-top: 24px;
	box-sizing: border-box;
	@media screen and (max-width: 767px) {
		display: none;
	}
`;


const Wrapper = styled.span`
	display: flex;
	flex-direction: column;
	padding: 12px 0;
	cursor: pointer;
	align-items: center;
	justify-content: center;
`;

const ColorDial = props => {
	const { colorDial, onClick } = props;
	const [ color, setColor ] = useState(props.background);
	const [ swatch, showSwatches ] = useState(false);

	function _randomize() {
			var item = colorDial[Math.floor(Math.random() * colorDial.length)];
			if(item !== color) {
				setColor(item);
				props.onClick(item);
			}
			else _randomize();
	}
	function _onClick(color) {
		setColor(color);
		onClick(color);
	}

	function _chooseColor () {
		switch(props.background) {
			case colors.gold:
				return colors.orange;
			case colors.beauBlue:
				return colors.oxfordBlue;
			case colors.black:
				return colors.white;
			case colors.forestGreen:
			default:
				return colors.darkGray;
		}
	}
	return (
		 <Wrapper onMouseOver={e => showSwatches(true)} onMouseLeave={e => showSwatches(false)}>
			 {!swatch &&
			 <DialWrapper color={_chooseColor()} onClick={_randomize}>
			 	<Body color={null}>{swatch ? 'Randomize' : 'Change Theme'}</Body>
			 </DialWrapper>}
			 {swatch &&
		 	 <React.Fragment>
				 <Shuffle color={_chooseColor()} onClick={_randomize} />
			 	 <SwatchGroupWrapper show={swatch}>
			 	 {colorDial.map((item, index) => {
			 	 	return (
			 	 		<ColorSwatch 
			 	 			key={index}
				 	 		onClick={e =>_onClick(item)} 
				 	 		color={item} 
				 	 		selected={color === item} 
						    data-aos="fade-up"
						    data-aos-offset="200"
						    data-aos-delay={((index + 1) * 50)}
						    data-aos-duration="350"
						    data-aos-easing="ease-in-out"/>
			 	 		)
			 	 })}
				 </SwatchGroupWrapper>
			 </React.Fragment>}
		 </Wrapper>
	)
};

export default ColorDial;