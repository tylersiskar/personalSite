import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Body } from '../typography';

const propTypes = {
	label: PropTypes.string,
	backgroundColor: PropTypes.string,
	borderColor: PropTypes.string,
};

const defaultProps = {
	label: "Button",
	backgroundColor: 'black',
	borderColor: 'white'
};

const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	border-radius: 10px;
	width: 150px;
	height: 50px;
	border: 1px solid ${({ borderColor }) => borderColor};
	background: ${({ backgroundColor }) => backgroundColor};
	margin: 0;
	padding: 0 12px;
	outline: none;
	transition: all 0.35s ease;
	&:hover {
		border-color: #FB4D3D;
		h3 {
			transition: all 0.35s ease;
			color: #FB4D3D;
		}
		cursor: pointer;
	}
	@media screen and (max-width: 1024px) {
		width: 112px;
		height: 36px;
	}
`;

const Button = props =>  {
	const { label } = props;
	return (
		<StyledButton {...props}>
			<Body size="large" bold color="white">{label}</Body> 
		</StyledButton>
	)
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;