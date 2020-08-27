import React from 'react';
import styled, { keyframes, css } from 'styled-components';
// import PropTypes from 'prop-types';
import colors from '../colors/colors';
import Button from './Button';

const propTypes = {
};

const defaultProps = {
};

const animateIn = keyframes `
	0% {
		opacity: 0;
		transform: translateY(-100%);
	}
	100% {
		opacity: 1;
		transform: translateY(0%);
	}
`;

const animateOut = keyframes `
	0% {
		opacity: 1;
		transform: translateY(0%);
	}
	100% {
		opacity: 0;
		transform: translateY(-100%);
	}
`;

const PopUpNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  z-index: 1000;
  background-color: ${colors.forestGreen};
  animation: ${animateIn} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
${({ unmounted }) =>
!unmounted &&
css`
  animation: ${animateOut} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
`}
`;


const NavHeader = styled.div`
	display: flex;
  background-color: ${colors.forestGreen};
	padding-bottom: 15px;
	justify-content: flex-end;
  z-index: 999;
	padding: 24px;
`;

class MenuNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mounted: false
		}
	}
	
	componentDidMount() {
		this.setState({ mounted: true });
	};

	_onClick = (e) => {
		this.setState({ mounted: false})		
		this.props.onClick();
	}

	render() {
		return(
			<PopUpNav unmounted={this.state.mounted}>
					<NavHeader>
						<Button type="close" onClick={this._onClick}/>
					</NavHeader>
			</PopUpNav>
		)
	}
};

MenuNav.propTypes = propTypes;
MenuNav.defaultProps = defaultProps;

export default MenuNav;