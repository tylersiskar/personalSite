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
	background-color: ${({ inverted }) => inverted ? 'black' : '#d6d6d6'};
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
	${({ side }) => side}: 100px;
	background-color: ${({ inverted }) => inverted ? '#d6d6d6' : 'black'};
	@media screen and (max-width: 1024px) {
		top: 0;
		${({ side }) => side}: 0;
		width: 7.5vw;
	}
`;

const TitleWrapper = styled.div`
	display: flex;
	position: relative;
	padding: 24px 0;
	padding-left: ${({ inverted }) => inverted ? 0 : 250}px;
	width: 100%;
	box-sizing: border-box;

`;

const BodyWrapper = styled.div`
	display: flex;
	box-sizing: border-box;
	position: relative;
	text-align: left;
	width: 100%;
	padding: 24px;
	border: 5px solid #035E7B;
	box-shadow: 12px rgba(3, 94, 123);
	margin: 0 24px;
	max-height: 500px;
`;

const ContentWrapper = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	height: 75vh;
	padding-${({ side }) => side}: 250px;
	box-sizing: border-box;
	flex-basis: 50%;
	@media screen and (max-width: 1024px) {
		flex-direction: column;
		padding-${({ side }) => side}: 7.5vw;
	}
`;

const Image = styled.div`
	display: flex;
	background-image: url(${({ src }) => src});
	background-position: center;
	background-size: cover;
	width: 500px;
	height: 500px;
	@media screen and (max-width: 767px) {
		width: 250px;
		height: 250px;
	}
`;

const Info = props => {
	const { title, inverted } = props;
	return(
		<Page id={title} inverted={inverted}>
		<VerticalRectangle inverted={inverted} side={inverted ? 'right' : 'left'}/>
		<TitleWrapper inverted={inverted}>
			<Title size="xLarge" bold color={inverted ? 'white' : 'black'}> {title} </Title>
		</TitleWrapper>
		<ContentWrapper side={inverted ? 'right' : 'left'}>
		<Image src={mesunset} />
		<BodyWrapper>
		<Body size="medium" color={inverted ? 'white' : 'black'}>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nisi et nisl tristique sollicitudin. Integer diam dolor, sagittis nec tellus vitae, condimentum consequat tellus. Proin vel tellus non est fringilla convallis. Curabitur eu augue sit amet ex dignissim dapibus. Aenean non metus sagittis, accumsan augue eget, condimentum eros. In fringilla quam nec molestie vestibulum. Proin in augue ante. Curabitur tristique, libero ac facilisis iaculis, mauris felis faucibus odio, gravida molestie magna mauris ac eros. Curabitur in aliquet dolor, non convallis magna. Nullam non est ac elit rhoncus pharetra quis at odio.
		</Body>

		</BodyWrapper>
		</ContentWrapper>
		</Page>
    )
}

export default Info;