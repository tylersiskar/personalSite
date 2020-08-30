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

const ItemDescription = props => {
	const { item, description, color } = props;
	return (
		<Container >
			<TitleWrapper>
				<Title size="xSmall" bold color={color}> {item} </Title>
			</TitleWrapper>
			<Body size="medium" color={color}> {description} </Body>
		</Container>
		)
}

export default ItemDescription;