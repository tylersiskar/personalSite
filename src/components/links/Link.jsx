import React from 'react';
import styled, { css } from 'styled-components';
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

const hoverStyle = css`
	text-decoration: none;
	outline: none;
	h3 {
		transition: all .35s ease;
		&:hover {
			color: #FB4D3D;
		}
	}
`;

const StyledNavLink = styled(NavLink)`
	${hoverStyle}
`;

const StyledLink = styled.a`
	${hoverStyle}
`;

const StyledButton = styled.button`
	border: none;
	background: transparent;
	padding: 0;
	margin: 0;
	cursor: pointer;
	${hoverStyle}

`;



const Link = props => {
	const { text, to, href, color, size, bold, onClick, active } = props;
	const TrueLink = href ? StyledLink : to ? StyledNavLink : StyledButton;
	return (
		<TrueLink to={to} href={href} onClick={onClick}>
			<Subtitle size={size} color={active ? '#FB4D3D' : color} bold={bold}>
			{text}
			</Subtitle>
		</TrueLink>
	)
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;
export default Link;