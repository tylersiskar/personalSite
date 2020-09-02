import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from '../Typography';
import colors from '../../colors/colors';
import ItemDescription from '../Lists/ItemDescription';
const propTypes = {
	title:  PropTypes.string,
	content: PropTypes.array,
	image: PropTypes.string,
};

const defaultProps = {
	title: 'Title Content',
};

const PanelWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
`;

const TitleWrapper = styled.div`
	display: flex;
	box-sizing: border-box;
	padding: 0 0 8px 8px;
`;

const CardContainer = styled.div`
	display: flex;
	border-radius: 20px;
	min-height: 350px;
	background-color: ${colors.darkGray};
	opacity: 0.9;
	padding: 20px;
	flex-basis: 50%;
	@media (min-width: 320px) and (max-width: 967px) {
		flex-direction: column;
		flex: 1 1 100%;
	}
`;

const TextWrapper = styled.div`
	display: flex;
	padding-right: 12px;
	width: 100%;
	flex-direction: column;
	justify-content: space-around;
`;

const ImageWrapper = styled.div`
	background-image: url(${({ src }) => src});
	background-position: center;
	background-size: cover;
	width: 100%;
	@media (min-width: 320px) and (max-width: 967px) {
		min-height: 250px
	}
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
				{content && content.map((body, index) => {
					return(
					<ItemDescription key={body.header} color="lightgray" item={body.header} description={body.description}/>
				)})}
				</TextWrapper>
				<ImageWrapper src={image} />
			</CardContainer>
		</PanelWrapper>
		)
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;