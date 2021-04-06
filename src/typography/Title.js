import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
	size: PropTypes.oneOf(["xSmall", "small", "medium", "large", "xLarge", "xxLarge"]),
	color: PropTypes.string,
	bold: PropTypes.bool
};

const defaultProps = {
	size: "medium",
	color: "black",
	bold: false
};

const TitleComponent = styled.h1`
	font-size: ${({ desktopSize }) => desktopSize}px;
	line-height: ${({ desktopSize }) => desktopSize}px;
	font-family: 'Noto Sans JP', sans-serif;
	font-weight: ${({ bold }) => bold ? 700 : 400};
	color: ${({ color }) => color};
	margin: 0;
	padding: 0;
	outline: none;
	@media screen and (max-width: 767px) {
		font-size: ${({ mobileSize }) => mobileSize}px;
		line-height: ${({ mobileSize }) => mobileSize}px;
	}
`;

function _getDesktopSize(size) {
	switch(size){
		case "xxLarge":
			return 96;
		case "xLarge":
			return 64;
		case "large":
			return 48;
		case "medium":
			return 32;
		case "small":
			return 24;
		case "xSmall":
		default:
			return 20;
	}
}

function _getMobileSize(size) {
	switch(size){
		case "xxLarge":
			return 64;
		case "xLarge":
			return 32;
		case "large":
			return 24;
		case "medium":
			return 20;
		case "small":
			return 16;
		case "xSmall":
		default:
			return 12;
	}
}

const Title = ({ size, color, bold, children }) => {
	return(
		<TitleComponent
			desktopSize={_getDesktopSize(size)}
			mobileSize={_getMobileSize(size)}
			color={color}
			bold={bold}>
		{children}
		</TitleComponent>
		)
}

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;