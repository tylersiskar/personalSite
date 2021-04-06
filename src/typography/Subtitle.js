import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
	size: PropTypes.oneOf(["small", "medium", "large"]),
	color: PropTypes.string,
	bold: PropTypes.bool
};

const defaultProps = {
	size: "medium",
	color: "black",
	bold: false
};

const SubtitleComponent = styled.h3`
	font-size: ${({ desktopSize }) => desktopSize}px;
	font-family: 'Noto Sans JP', sans-serif;
	font-weight: ${({ bold }) => bold ? 700 : 400};
	color: ${({ color }) => color};
	margin: 0;
	padding: 0;
	outline: none;
	@media screen and (max-width: 767px) {
		font-size: ${({ mobileSize }) => mobileSize}px;
	}
`;

function _getDesktopSize(size) {
	switch(size){
		case "large":
			return 32;
		case "medium":
			return 24;
		case "small":
		default:
			return 20;
	}
}

function _getMobileSize(size) {
	switch(size){
		case "large":
			return 24;
		case "medium":
			return 20;
		case "small":
		default:
			return 16;
	}
}

const Subtitle = ({ size, color, bold, children }) => {
	return(
		<SubtitleComponent
			desktopSize={_getDesktopSize(size)}
			mobileSize={_getMobileSize(size)}
			color={color}
			bold={bold}>
		{children}
		</SubtitleComponent>
		)
}

Subtitle.propTypes = propTypes;
Subtitle.defaultProps = defaultProps;
export default Subtitle;