import React from 'react';
import styled from 'styled-components';
import { Link as DomLink } from 'react-router-dom';
import { Title } from '../Typography';
import PropTypes from 'prop-types';

const propTypes = {
	children: PropTypes.node
};

const defaultProps = {
	children: undefined,
};

const StyledLink = styled(DomLink)`
  text-decoration: none;
  position: relative;
  display: inline-flex;
  box-sizing: border-box;
  width: fit-content;
  padding-left: 44px;
  left: 0;
  transition: padding-left .35s ease;
  &:hover {
    opacity: 0.7;
    padding-left: 76px;
  }
  @media screen and (max-width: 767px) {
    padding-left: 16px;
    &:hover {
      opacity: 0.7;
      padding-left: 44px;
    }
  }
`;

const Link = props => {
	const { children, active } = props;
	return(
		<StyledLink {...props}>
    <Title size="xSmall" color={active ? 'lightgray' : 'white'}>
		{children}
    </Title>
		</StyledLink>
	)
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;