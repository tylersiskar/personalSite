import React from 'react';
import styled from 'styled-components';
import { Body } from '../typography';

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding: 32px;
	padding-left: 0;
	@media screen and (max-width: 1024px) {
		flex-direction: row;
	}
`;

const ImageContainer = styled.div`
	background-image: ${({ src }) => `url(${src})`};
	background-size: cover;
	background-position: center;
	flex-basis: 50%;
	display: flex;
	margin-bottom: 16px;
`;

const TextContainer = styled.div`
	flex-basis: 50%;
	display: flex;
	text-align: left;
`;

const Card = props => {
	return (
		<CardContainer>
			<ImageContainer src={props.src} />
			<TextContainer>
				<Body size="medium" color="white">
					{props.text}
				</Body>
			</TextContainer>
		</CardContainer>
		)
}

export default Card;