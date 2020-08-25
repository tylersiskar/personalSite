import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
  font-family: Helvetica;
  
  font-weight: bold;
  font-size: 20px;
  outline: none;
  ${({ active }) => !active && `
    &:hover {
      cursor: pointer;
      background-color: lightgray;
      border-radius: 6px;
    }

    `};
`;

const AnchorLink = props => {
	const { children } = props;
	return(
		<StyledLink {...props} active={props.active}>
		{children}
		</StyledLink>
	)
};

AnchorLink.propTypes = propTypes;
AnchorLink.defaultProps = defaultProps;

export default AnchorLink;