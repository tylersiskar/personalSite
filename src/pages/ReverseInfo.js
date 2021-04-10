import React from 'react';
import styled from 'styled-components';
import { Title, Body, mesunset } from '../components';

const Page = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	width: 100vw;
	height: 100vh;
	text-align: center;
	padding: 0 32px;
	box-sizing: border-box;
	background-color: black;
`;

const StyledA = styled.a`
	text-decoration: none;
	color: white;
	&:hover {
		cursor: pointer;
		color: blue;
	}
`;

const VerticalRectangle = styled.div`
	height: 100vh;
	width: 150px;
	position: absolute;
	right: 100px;
	background-color: #d6d6d6;
	@media screen and (max-width: 1024px) {
		top: 0;
		right: 0;
		width: 7.5vw;
	}
`;

const TitleWrapper = styled.div`
	display: flex;
	position: relative;
	padding: 24px 0;
	width: 100%;
`;

const BodyWrapper = styled.div`
	display: flex;
	box-sizing: border-box;
	position: relative;
	text-align: left;
	width: 100%;
	background-color: #035E7B;
`;

const ContentWrapper = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	height: 75vh;
	padding-right: 250px;
	box-sizing: border-box;
	flex-basis: 50%;
	@media screen and (max-width: 1024px) {
		flex-direction: column;
		padding-right: 7.5vw;
	}
`;

const Image = styled.div`
	display: flex;
	background-image: url(${({ src }) => src});
	background-position: center;
	background-size: cover;
	width: 500px;
	height: 500px;
`;

const Info = props => {
	const { title } = props;
	return(
		<Page id={title}>
		<VerticalRectangle />
		<TitleWrapper>
			<Title size="xLarge" bold color="white"> {title} </Title>
		</TitleWrapper>
		<ContentWrapper>
			<BodyWrapper>
			</BodyWrapper>
		</ContentWrapper>
		</Page>
    )
}

export default Info;