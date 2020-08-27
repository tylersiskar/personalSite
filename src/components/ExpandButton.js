import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../colors/colors';

const propTypes = {
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	color: PropTypes.string

};

const defaultProps = {
	size: 'medium',
	color: colors.forestGreen
};

const ExpandButtonBase = styled.button`
	background-color: ${({ color }) => color};
	border: 1px solid lightgray;
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
	border-radius: 50%;
	cursor: pointer;
`;



const ExpandButton = props => {

	function _determineButtonSize(size) {
		switch(size) {
			case "small":
				return 32;
			case "medium":
				return 44;
			case "large":
			default:
				return 64;
		}
	}

	return (
		<ExpandButtonBase {...props} size={_determineButtonSize(props.size)} color={props.color}>
		{props.children}
		</ExpandButtonBase>
		)
};

ExpandButton.propTypes = propTypes;
ExpandButton.defaultProps = defaultProps;

export default ExpandButton;