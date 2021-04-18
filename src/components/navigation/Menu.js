import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from '../links';
import { CloseButton } from '../buttons';
import { Title, Subtitle } from '../typography';
import { data } from '../../data';

const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 33%;
	text-align: left; 
	position: absolute;
	top: 0;
	right: ${({ open }) => open ? '0' : '-33%'};
	opacity: ${({ open }) => open ? '1' : '0'};
	transition: right 0.35s ease;
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
	width: 100%;
	padding: 24px;
	border-left: 1px solid gray;
	border-bottom: 1px solid gray;
`;

const CloseButtonWrapper = styled.div`
	display: flex;
	background-color: transparent;
	width: 100%;
	height: 100px;
	padding-right: 16px;
	border-bottom: 1px solid gray;
	box-sizing: border-box;
	justify-content: flex-end;
`;


const Menu = ({ onContactClick, onClose, open }) => {
	const [ animate, setAnimate ] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setAnimate(open);
		}, 350)
	}, [open])

	return (
		<StyledMenu open={animate}>
			<CloseButtonWrapper>
			<CloseButton onClick={onClose} />
			</CloseButtonWrapper>
			{data['home'].map(item => {
				return (
					<MenuItem>
						<Link to={item.link} text={item.name} color="white" bold/>
					</MenuItem>
					)
			})}
			<MenuItem>
				<Link onClick={onContactClick} text="CONTACT" color="white" bold/>
			</MenuItem>
		</StyledMenu>
		)
}

export default Menu;