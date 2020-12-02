import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from '../Typography';
import colors from '../../colors/colors';
import ItemDescription from '../Lists/ItemDescription';
import SpotifyPlayer from 'react-spotify-player';
import ReactPlayer from 'react-player';

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
	background-color: ${({ background }) => background ? background : colors.darkGray};
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
	display: flex;
	background-image: url(${({ src }) => src});
	background-position: center;
	background-size: cover;
	width: 100%;
	* {
		width: 100%;
		max-width: 600px;
	}
	@media (min-width: 320px) and (max-width: 967px) {
		min-height: 250px
	}
`;

const Card = props => {
	const { title, content, image } = props;

	return (
			<PanelWrapper>
				<TitleWrapper>
					<Title size="small" color={props.background ? props.background === colors.orange ? colors.white : props.background :  colors.forestGreen}> {title} </Title>
				</TitleWrapper>
				<CardContainer background={props.background}>
					<TextWrapper>
					{content.map((body, index) => {
						return(
						<ItemDescription key={body.header} color="lightgray" item={body.header} href={body.href} link={body.link} description={body.description}/>
					)})}
					</TextWrapper>
					<ImageWrapper src={image}> 
					{title === 'music' && props.spotify && 
						<SpotifyPlayer
						  uri="spotify:playlist:37i9dQZF1EMfrujgpof5m1"
						  size={{height: '100%', width: '100%'}}
						  />
					}

					{title === 'travel' && 
						<ReactPlayer
						  url="https://www.youtube.com/watch?v=1zCL-0_mA90&feature=youtu.be&fbclid=IwAR0G1NA-GTNC3LUPsMfQfeSfqJUmJMTkzsz3GT4YCnJNhQznYW6NOe0WIQs"
						  light
						  playing
						  controls
						  width="100%"
						  height="100%"
						  />
					}
					</ImageWrapper>
				</CardContainer>
			</PanelWrapper>
		)
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;