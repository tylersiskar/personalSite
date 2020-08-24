import React from 'react';
import styled from 'styled-components';
import colors from '../colors/colors';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
};

const defaultProps = {
};

const StyledLogo = styled.div`
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
	font-size: 44px;
	font-family: Brush Script MT;
	letter-spacing: 0.5px;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${colors.darkGreen}
`;

const Logo = props => {
	return(
		<StyledLogo> <StyledLink to='/homepagez'> Tyler Siskar </StyledLink> </StyledLogo>
	)
};

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;