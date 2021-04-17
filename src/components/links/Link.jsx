import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Subtitle } from '../typography';

const propTypes = {
	text: PropTypes.string,
	to: PropTypes.string,
	href: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.string,
};

const defaultProps = {
	color: 'black',
	size: 'medium'
}

const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	outline: none;
	h3 {
		transition: all .35s ease;
		&:hover {
			color: #FB4D3D;
		}
	}
`;

const StyledLink = styled.a`
	text-decoration: none;
	outline: none;
	h3 {
		transition: all .35s ease;
		&:hover {
			color: #FB4D3D;
		}
	}
`;

const Link = props => {
	const { text, to, href, color, size, bold } = props;
	const TrueLink = href ? StyledLink : StyledNavLink;
	return (
		<TrueLink to={to} href={href}>
			<Subtitle size={size} color={color} bold={bold}>
			{text}
			</Subtitle>
		</TrueLink>
	)
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;
export default Link;