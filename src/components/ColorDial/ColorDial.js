import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../colors/colors';
import { Body } from '../Typography';

const DialWrapper = styled.span`
	display: flex;
	position: relative;
	align-items: center;
	color: white;
	justify-content: center;
	height: 44px;
	padding: 0 16px;
	border-radius: 5px;
	background-color: ${({ color }) => color};
	opacity: 1;
	transition: all 0.35s ease;
	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;


const ColorDial = props => {
	const { colorDial } = props;
	const [ color, setColor ] = useState(props.background);

	function _onClick() {
		var item = colorDial[Math.floor(Math.random() * colorDial.length)];
		if(item !== color) {
			setColor(item);
			props.onClick(item);
		}
		else _onClick();
	}
	function _chooseColor () {
		switch(props.background) {
			case colors.gold:
				return colors.orange;
			case colors.beauBlue:
				return colors.oxfordBlue;
			case colors.forestGreen:
			default:
				return colors.darkGray;
		}
	}
	return (
		<DialWrapper color={_chooseColor()} onClick={_onClick}>
		 <Body bold> Change Theme </Body>
		 </DialWrapper>
	)
};

export default ColorDial;