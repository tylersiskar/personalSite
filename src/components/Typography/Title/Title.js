import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	bold: PropTypes.bool,
	children: PropTypes.node,
	color: PropTypes.string
};

const defaultProps = {
	size: 'medium',
	color: 'white'
}

const TitleComponent = styled.span`
	font-family: Helvetica;
	font-size: ${({ size }) => size}px;
	font-weight: ${({ bold }) => bold ? 'bold' : '450'};
	text-transform: lowercase;
	color: ${({ color }) => color};
`;

const Title = props => {
	const { size, children } = props;

	function _determineFontSize(size) {
		if( typeof size === 'number' ) return size;
		switch(size) {
			case "small":
				return 32;
			case "medium":
				return 64;
			case "large":
			default:
				return 128;
		}
	}

	return (
		<TitleComponent {...props} size={_determineFontSize(size)}>
		{children}
		</TitleComponent>
		)
}


Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;