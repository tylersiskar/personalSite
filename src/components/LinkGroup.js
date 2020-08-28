import React, { Fragment } from 'react';
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
		const { activeRoute } = props;
		return(
			<LinkContainer>
				<Link active={activeRoute === 'personal'} to="/personal"> personal </Link>
				<Link active={activeRoute === 'development'} to="/development"> development </Link>
				<Link active={activeRoute === 'hobbies'} to="/hobbies"> hobbies </Link>
				<Link active={activeRoute === 'contact'} to="/contact"> contact </Link>
			</LinkContainer>
		)
};

LinkGroup.propTypes = propTypes;
LinkGroup.defaultProps = defaultProps;

export default LinkGroup;