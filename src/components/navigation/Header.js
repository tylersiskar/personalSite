import React from 'react';
import styled from 'styled-components';
import { Link } from '../links';
import { Button } from '../buttons';
import { Title, Subtitle } from '../typography';
import { homeData } from '../../data';
import { ReactComponent as Hamburger } from '../icons/hamburger.svg';

const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 100px;
	background: transparent;
	border-bottom: 1px solid gray;
	width: 100%;
	padding: 0 32px;
	box-sizing: border-box;
	@media screen and (max-width: 1024px) {
		justify-content: space-between;
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

const StyledHamburger = styled(Hamburger)`
	&:hover {
		cursor: pointer;
		rect {
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

const Header = ({ children, onButtonClick }) => {
	return (
		<HeaderContainer>
			<HomeLinkWrapper href="/home">
				<Title size="medium" bold color="white"> Tyler Siskar </Title>
				<FlexRow>
					<Subtitle size="small" color="gray">Frontend Web Developer</Subtitle> 
				</FlexRow>
			</HomeLinkWrapper>
			<LinkWrapper>
			{homeData.map(item => <Link to={item.link} text={item.name} size="medium" bold color="white" />)}
			</LinkWrapper>
			<ButtonWrapper>
			<Button onClick={onButtonClick} label="Contact"/>
			</ButtonWrapper>
			<StyledHamburger fill="white"/>
		</HeaderContainer>
		)
}

export default Header;