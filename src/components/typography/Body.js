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

const BodyComponent = styled.h3`
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
			return 20;
		case "medium":
			return 16;
		case "small":
		default:
			return 12;
	}
}

function _getMobileSize(size) {
	switch(size){
		case "large":
			return 16;
		case "medium":
			return 14;
		case "small":
		default:
			return 8;
	}
}

const Body = ({ size, color, bold, children, style }) => {
	return(
		<BodyComponent
			style={style}
			desktopSize={_getDesktopSize(size)}
			mobileSize={_getMobileSize(size)}
			color={color}
			bold={bold}>
		{children}
		</BodyComponent>
		)
}

Body.propTypes = propTypes;
Body.defaultProps = defaultProps;
export default Body;