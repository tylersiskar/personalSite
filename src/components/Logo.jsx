import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
	children: PropTypes.node
};

const defaultProps = {
	children: undefined,
};

const StyledLogo = styled.a`
	color: purple;
	font-size: 48px;
  font-family: Impact;
	font-weight: 750;
	border-bottom: 2px solid skyblue;
	opacity: 1;
	&:hover {
		cursor: pointer;
	  animation: spin 2s ease;
	  opacity: 0.7;
	  transition: opacity .5s ease;
	}
	@keyframes spin {
	  0% { transform: rotate(0deg); }
	  50% { transform: rotate(30deg); }
	  100% { transform: rotate(0deg); }
	}
`;

const Logo = props => {
	const { children } = props;
	return(
		<StyledLogo>
		{children}
		</StyledLogo>
	)
};

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;