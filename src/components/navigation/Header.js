import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from '../links';
import { Button } from '../buttons';
import { Title, Subtitle } from '../typography';
import { data } from '../../data';
import { ReactComponent as Hamburger } from '../icons/hamburger.svg';
import Menu from './Menu';

const FixedContainer = styled.div`
    z-index:2;
    height:100px;
    position: fixed; 
    width: 100%;
`;
const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	position: relative;
	justify-content: space-around;
	height: 100px;
	background: black;
	border-bottom: 1px solid gray;
	width: 100%;
	padding: 0 64px;
	z-index: 1;
	box-sizing: border-box;
	@media screen and (max-width: 1024px) {
		justify-content: space-between;
		padding: 0 32px;
	}
`;

const FlexRow = styled.div`
	display: flex;
`;

const LinkWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 33vw;
	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	width: 33vw;
	justify-content: flex-end;
	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

const StyledHamburger = styled.div`
	display: ${({ open }) => open ? 'none' : 'block'};
	&:hover {
		cursor: pointer;
		svg rect {
			fill: #FB4D3D;
		}
	}
	@media screen and (min-width: 1024px) {
		display: none;
	}
`;
const HomeLinkWrapper = styled.a`
	display: flex;
	flex-direction: column;
	width: 33vw;
	text-decoration: none;
	@media screen and (max-width: 1024px) {
		width: 50vw;
	}
`;

const Header = ({ children, onButtonClick, path }) => {
	const [ open, openMenu ] = useState(false);
	return (
		<FixedContainer>
		<HeaderContainer>
			<HomeLinkWrapper href="/home">
				<Title size="medium" bold color="white"> Tyler Siskar </Title>
				<FlexRow>
					<Subtitle size="small" color="gray">Frontend Web Developer</Subtitle> 
				</FlexRow>
			</HomeLinkWrapper>
			<LinkWrapper>
			{data['home'].map(item => <Link to={item.link} text={item.name} active={`/${path}` === item.link} size="small" bold color="white" />)}
			</LinkWrapper>
			<ButtonWrapper>
				<Button onClick={onButtonClick} label="Contact"/>
			</ButtonWrapper>
			<StyledHamburger open={open} onClick={e => openMenu(true)}>
				<Hamburger fill="white" />
			</StyledHamburger>
			{open && <Menu open={open} onClose={e => openMenu(false)} onContactClick={onButtonClick}/>}
		</HeaderContainer>
		</FixedContainer>
		)
}

export default Header;