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
  display: flex;
  color: black;
  text-align: center;
  padding: 16px;
  text-decoration: none;
  font-family: Impact;
  &:hover {
  	cursor: pointer;
  	color: gray;
  }
`;

const Link = props => {
	const { children } = props;
	return(
		<StyledLink>
		{children}
		</StyledLink>
	)
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;