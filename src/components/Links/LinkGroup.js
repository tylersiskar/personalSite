import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from './Link';

const propTypes = {
	activeRoute: PropTypes.string
};

const defaultProps = {
	activeRoute: undefined
}

const LinkContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const LinkGroup = props => {
		const { activeRoute, links } = props;
		return(
			<LinkContainer>
			{links.map((item, index) => {
				return(
					<Link key={index} active={activeRoute === item.route} to={item.to}> {item.route} </Link>
					)
			})}
			</LinkContainer>
		)
};

LinkGroup.propTypes = propTypes;
LinkGroup.defaultProps = defaultProps;

export default LinkGroup;