import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
	size: PropTypes.oneOf(['xSmall', 'small', 'medium', 'large']),
	bold: PropTypes.bool,
	children: PropTypes.node,
	color: PropTypes.string
};

const defaultProps = {
	size: 'medium',
	color: 'white'
}

const TitleComponent = styled.span`
	font-family: Jura;
	font-weight: ${({ bold }) => bold ? '800' : '450'};
	text-transform: lowercase;
	color: ${({ color }) => color};
	font-size: ${({ size }) => size}px;
	@media screen and (max-width: 1024px) {
		font-size: ${({ mobileSize }) => mobileSize}px;
	}
`;

const Title = props => {
	const { size, children } = props;

	function _determineFontSize(size) {
		if( typeof size === 'number' ) return size;
		switch(size) {
			case "xSmall":
				return 32;
			case "small":
				return 44;
			case "medium":
				return 64;
			case "large":
			default:
				return 128;
		}
	}

	function _determineMobileSize(size) {
		if( typeof size === 'number' ) return size;
		switch(size) {
			case "xSmall":
				return 24;
			case "small":
				return 32;
			case "medium":
				return 48;
			case "large":
			default:
				return 96;
		}
	}

	return (
		<TitleComponent {...props} logo={props.logo} mobileSize={_determineMobileSize(size)} size={_determineFontSize(size)}>
		{children}
		</TitleComponent>
		)
}


Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;