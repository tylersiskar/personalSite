import React from 'react';
import styled from 'styled-components';
import { Title, Body } from '../Typography';

const Container = styled.span`
	display: flex;
	flex-direction: column;
	padding-bottom: 8px;
`;

const TitleWrapper = styled.span`
	padding-bottom: 4px;
`;

const Anchor = styled.a`
	color: lightgray;
	&:hover {
		color: blue;
	}
`;
const Span = styled.span``;

const ItemDescription = props => {
	const { item, description, color, href, link } = props;
	let Text = href ? Anchor : Span
	return (
		<Container >
			<TitleWrapper>
				<Title size="xSmall" bold color={color}> {item} </Title>
			</TitleWrapper>
			<Body size="medium" color={color}> 
				{description}
				<Text href={href} color={color}>{link} </Text>
			</Body>
		</Container>
		)
}

export default ItemDescription;