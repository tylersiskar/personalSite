import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const propTypes = {
	children: PropTypes.node
};

const defaultProps = {
	children: undefined,
};

const PopUpNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  z-index: 9999;
  background-color: black;
  margin: 0 0 0 20px;
`;


const NavHeader = styled.div`
	display: flex;
  background-color: black;
	padding-bottom: 15px;
	justify-content: flex-end;
  z-index: 999;
	padding: 24px;
`;

class MenuNav extends React.Component {
	render() {
		const { children } = this.props;
		return(
			<PopUpNav>
					<NavHeader>
						<Button type="close" onClick={this.props.onClick}/>
					</NavHeader>
			</PopUpNav>
		)
	}
};

MenuNav.propTypes = propTypes;
MenuNav.defaultProps = defaultProps;

export default MenuNav;