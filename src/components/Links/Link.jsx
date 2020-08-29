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
  padding-left: 44px;
  left: 0;
  transition: left .35s ease;
  &:hover {
    opacity: 0.7;
    left: 32px;
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