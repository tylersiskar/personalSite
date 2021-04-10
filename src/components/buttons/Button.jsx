import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Subtitle } from '../typography';

const propTypes = {
	label: PropTypes.string,
	backgroundColor: PropTypes.string,
	borderColor: PropTypes.string,
};

const defaultProps = {
	label: "Button",
	backgroundColor: 'white',
	borderColor: 'black'
};

const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	border-radius: 25px;
	width: 200px;
	height: 50px;
	border: 1px solid ${({ borderColor }) => borderColor};
	background: ${({ backgroundColor }) => backgroundColor};
	margin: 0;
	padding: 0 12px;
	outline: none;
	&:hover {
		border-width: 2px;
		cursor: pointer;
	}
	&:active {
		border-color: #d6d6d6;
		h3 {
		  color: #d6d6d6;
		}
	}
	@media screen and (max-width: 767px) {
		border-radius: 22px;
		width: 150px;
		height: 44px;
	}
`;

const Button = props =>  {
	const { label } = props;
	return (
		<StyledButton {...props}>
			<Subtitle size="small" bold>{label}</Subtitle> 
		</StyledButton>
	)
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;