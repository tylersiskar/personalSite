import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../colors/colors';

const propTypes = {
	children: PropTypes.node
};

const defaultProps = {
	children: undefined,
};

const SideNavWrapper = styled.div`
  width: 200px;
  height: 100vh;
  position: absolute;
  top: 86px;
  right: 0;
  background-color: white;
  z-index: 99;
  box-shadow: -10px 0px 10px 1px ${colors.darkGray};
`;

const SideNav = props => {
	const { children } = props;
	return(
		<SideNavWrapper />
	)
};

SideNav.propTypes = propTypes;
SideNav.defaultProps = defaultProps;

export default SideNav;