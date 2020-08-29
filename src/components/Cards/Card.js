import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title, Body } from '../Typography';
import colors from '../../colors/colors';

const propTypes = {
	title:  PropTypes.string,
	content: PropTypes.string,
	image: PropTypes.string,
};

const defaultProps = {
	title: 'Title Content',
	content: 'Lorem ipsum dolor sit amet'
};

const PanelWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	height: 100%;
`;

const TitleWrapper = styled.div`
	display: flex;
	box-sizing: border-box;
	padding: 0 0 8px 8px;
`;

const CardContainer = styled.div`
	display: flex;
	border-radius: 20px;
	min-height: 300px;
	background-color: ${colors.darkGray};
	opacity: 0.9;
	padding: 20px;
	flex-basis: 50%;
`;

const TextWrapper = styled.div`
	display: flex;
	padding-right: 12px;
	width: 100%;
`;

const ImageWrapper = styled.div`
	background-image: url(${({ src }) => src});
	background-position: center;
	background-size: cover;
	width: 100%;
`;

const Card = props => {
	const { title, content, image } = props;
	return (
		<PanelWrapper>
			<TitleWrapper>
				<Title size="small" color={colors.forestGreen}> {title} </Title>
			</TitleWrapper>
			<CardContainer>
				<TextWrapper>
					<Body size="large" color={colors.forestGreen}> {content} </Body>
				</TextWrapper>
				<ImageWrapper src={image} />
			</CardContainer>
		</PanelWrapper>
		)
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;