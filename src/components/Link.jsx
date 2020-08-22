import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import colors from '../colors/colors';

const propTypes = {
	children: PropTypes.node
};

const defaultProps = {
	children: undefined,
};

const StyledLink = styled(Link)`
  display: inline-block;
  color: black;
  text-align: center;
  padding: 4px 7px;
  text-decoration: none;
  font-family: base-complex,sans-serif;
  font-weight: bold;
  font-size: 0.9375rem;
  line-height: 0.9375rem;
  text-transform: uppercase;
  font-stretch: 100%;
  outline: none;
  &:hover {
  	cursor: pointer;
  	background-color: lightgray;
    border-radius: 6px;
  }
`;

const AnchorLink = props => {
	const { children } = props;
	return(
		<StyledLink {...props}>
		{children}
		</StyledLink>
	)
};

AnchorLink.propTypes = propTypes;
AnchorLink.defaultProps = defaultProps;

export default AnchorLink;