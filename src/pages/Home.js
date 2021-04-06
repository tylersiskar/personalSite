import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Title, Subtitle } from '../typography';
import { homeData } from '../data';
import RightArrow from '../RightArrow';

const Page = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`;

const FlexRow = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
`;

const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledLink = styled.a`
	text-decoration: none;
	color: black;
	padding: 0 32px;
	&:last-child {
		padding-right: 0;
	}
	@media screen and (max-width: 767px) {
		padding: 0 16px;
	}
	&:hover {
		opacity: 0.7;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
	position: absolute;
	top: 0;
	right: 0;
	padding: 32px;
	box-sizing: border-box;
	transition: all 0.35s ease;
	@media screen and (max-width: 767px) {
		padding: 16px;
		justify-content: center;
	}
`;

const ContactButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	border-radius: 25px;
	width: 200px;
	height: 50px;
	border: 1px solid black;
	background: white;
	margin: 0;
	padding: 0 12px;
	outline: none;
	&:hover {
		border-width: 2px;
		cursor: pointer;
	}
	@media screen and (max-width: 767px) {
		border-radius: 22px;
		width: 150px;
		height: 44px;
	}
`;

const IconWrapper = styled.div`
	position: absolute;
	bottom: 15vh;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: rotate(90deg);
	&:hover {
		cursor: pointer;
	}
`;

function _scrollToInfo(e) {
	document.getElementById('about').scrollIntoView({behavior: "smooth"});
}

const Home = props => {
	return(
		<Page>
			<ButtonWrapper>
				<ContactButton> <Subtitle size="small" bold> Contact </Subtitle> </ContactButton>
			</ButtonWrapper>
			<FlexCol>
				<Title size="xxLarge" bold> Tyler Siskar </Title>
				<FlexRow>
				{homeData.map((item, index) => {
					return (
						<Fragment key={index}>
							<StyledLink href={`#${item.link}`}> 
								<Subtitle size="large" color="gray">{item.name}</Subtitle> 
							</StyledLink> 
							{index !== homeData.length - 1 && <Subtitle size="large" color="gray"> • </Subtitle>}
						</Fragment>
						)
				})}
				</FlexRow>
			</FlexCol>
			<IconWrapper onClick={_scrollToInfo}>
				<RightArrow />
			</IconWrapper>
		</Page>
    )
}

export default Home;