import React from 'react';
import styled from 'styled-components';
import colors from '../colors/colors';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
	children: PropTypes.node
};

const defaultProps = {
	children: undefined,
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
	font-size: 32px;
	font-weight: bold;
	font-family: fantasy;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${colors.darkGreen}
`;

const Logo = props => {
	const { children, name } = props;

	let complexLogo = 'https://images.complex.com/complex/image/upload/complex-logo-dark_loo0gl.svg'
	return(
		<StyledLogo> <StyledLink to='/homepagez'> Tyler Siskar </StyledLink> </StyledLogo>
	)
};

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;