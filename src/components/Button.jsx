import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../colors/colors';

const propTypes = {
	children: PropTypes.node,
  type: PropTypes.string,
  textColor: PropTypes.string
};

const defaultProps = {
	children: undefined,
  type: 'dropdown',
  textColor: colors.forestGreen
};

const ButtonBase = styled.button`
  display: inline-block;
  color: ${({ textColor }) => textColor};
  outline: none;
  text-align: center;
  text-decoration: none;
  font-family: Helvetica;
  cursor: pointer;
  padding: 0;
  font-weight: bold;
  font-size: 20px;
  font-stretch: 100%;
  background-color: transparent;
  border: none;
  border-radius: 16px;
  &:active {
    outline: none;
  }
  &:hover
    span:after {
    cursor: pointer;
    top: 5px;
  }
  span:after {
    display: inline-block;
    position: relative;
    transition: top 0.3s ease;
    top: 0px;
    content: "";
    margin-left: 10px;
    height: 8px;
    width: 8px;
    border: solid;
    border-color: ${({ textColor }) => textColor};
    border-width: 2px 2px 0 0;
    transform: rotate(135deg) translateY(4px);
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  &:hover {
    outline: none;
    svg {
      fill: gray;
    }
  }
`;

const StyledSpan = styled.span`
`;
  
const Button = props => {
	const { children, type, text } = props;

  if (type === 'dropdown') {
    return (
  		<ButtonBase {...props} textColor={props.textColor}>
        <StyledSpan >
    		{text ? text : children}
        </StyledSpan>
  		</ButtonBase>
    )
  } else if 
   (type === 'close') {
    return (
      <CloseButton type={type} onClick={props.onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 190" width="40px" height="40px" fill="#FFF">
          <path d="M190.73,3.33,2.67,188.81m184.48,3L1.41,6.13,6.13,1.41,191.86,187.14ZM1.41,187.14,187.14,1.41l4.72,4.72L6.13,191.86Z" stroke="#FFF" strokeMiterlimit="10" strokeWidth="1"/>
        </svg>
      </CloseButton>
    )
  }
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;