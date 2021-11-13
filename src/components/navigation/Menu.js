import React from 'react';
import styled from 'styled-components';
import { Link } from '../links';
import { data } from '../../data';

const StyledMenu = styled.nav`
	display: ${({ open }) => open ? 'flex' : 'none'};
	flex-direction: column;
	height: 100vh;
	width: 33%;
	text-align: left; 
	position: absolute;
	top: 0;
	right: 0;
	padding-top: 100px;
	z-index: 1;
	box-shadow: grey 0px 12px 12px;
	background: black;
	@media screen and (min-width: 1024px) {
		display: none;
	}
	@media screen and (max-width: 767px) {
		width: 50%;
	}
`;

const MenuItem = styled.div`
	display: flex;
	background-color: black;
	box-sizing: border-box;
	padding: 24px 0;
	margin: 0 24px;
	border-bottom: 1px solid darkgray;
	&:last-child {
		border: none;
	}
`;

const Menu = ({ onContactClick, open }) => {
	console.log(open);
	return (
		<StyledMenu open={open}>
			{data['home'].map(item => {
				return (
					<MenuItem>
						<Link to={item.link} text={item.name} color="white" bold />
					</MenuItem>
				)
			})}
			<MenuItem>
				<Link onClick={onContactClick} text="Contact" color="white" bold />
			</MenuItem>
		</StyledMenu>
	)
}

export default Menu;