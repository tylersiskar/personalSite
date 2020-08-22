import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
	children: PropTypes.node
};

const defaultProps = {
	children: undefined,
};

const StyledLink = styled.a`
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
  &:hover {
  	cursor: pointer;
  	color: white;
  	background-color: black;
  }
`;

const AnchorLink = props => {
	const { children } = props;
	return(
		<StyledLink onClick={props.onClick}>
		{children}
		</StyledLink>
	)
};

AnchorLink.propTypes = propTypes;
AnchorLink.defaultProps = defaultProps;

export default AnchorLink;