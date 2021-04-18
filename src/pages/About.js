import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Title, Subtitle, Body , Button, Link, wheel, Header } from '../components';
import { ReactComponent as LinkIcon } from '../components/icons/link.svg';
import { ContactModal } from './ContactModal';
import { aboutData } from '../data.js'; 

const Page = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100%;
  padding-top: 100px;
  background-color: rgba(0,0,0,0.8);
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	margin: 64px;
	@media screen and (max-width: 1024px) {
		margin: 32px;
	}
`;

const TitleWrapper = styled.div`
	display: flex;
	padding-bottom: 64px;
	@media screen and (max-width: 767px) {
		padding-bottom: 48px;
	}
`;

const SubtitleWrapper = styled.div`
	display: flex;
	padding-bottom: 12px;
`;

const Image = styled.div`
	width: 400px;
	height: 400px;
	border-radius: 25%;
	background-image: url(${({ image }) => image});
	background-size: cover;
	background-position: center;
	@media screen and (max-width: 767px) {
		width: 300px;
		height: 300px;
	}
`;

const Container = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	flex-basis: 50%;
	width: 100%;
	height: 100%;
	padding-bottom: 64px;
	@media screen and (max-width: 1024px) {
		padding-bottom: 48px;
		align-items: ${({ img }) => img ? 'center' : 'flex-start'};
	}
`;

const BodyContainer = styled.div`
	display: flex;
	flex-direction: row;
	@media screen and (max-width: 1024px) {
		flex-direction: column;
	}
`;

const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 16px;
`;

const renderPlace = (obj) => {
	return (
		<Container>
			<SubtitleWrapper>
				<Subtitle color="gray" size="large" bold>{obj.place}</Subtitle>
			</SubtitleWrapper>
			{obj.timeline && <Body color="gray" size="medium" bold>{obj.timeline}</Body>}
		</Container>
		)
}

const renderImage = (img) => {
	return (
		<Container img>
			<Image image={img} />
		</Container>
		)
}

const renderProjects = (content) => {
	return content.map(item => {
		return (
			<FlexCol>
				<SubtitleWrapper>
				<Subtitle size="medium" bold color="white" style={{paddingRight: 12}}>{item.title}</Subtitle>
				{item.addLink && <a target="_blank" href={`http://${item.title}`}><LinkIcon fill="white"/> </a>}
				</SubtitleWrapper>
				<Body color="white" size="medium">{item.description}</Body>
			</FlexCol>
			)
	})
}

const About = ({ data }) => {
	return(
		<Page>
			<ContentWrapper>
				<TitleWrapper>
					<Title color="white" size="xLarge" bold> {data[0].title} </Title>
				</TitleWrapper>
			{data.map(obj => {
				return(
					<BodyContainer>
						{obj.img && renderImage(obj.img)}
						{obj.place && renderPlace(obj)}
						<Container>
							{typeof obj.content !== 'string' && renderProjects(obj.content)}
							{typeof obj.content === 'string' && 
								<Body color="white" size="large">{obj.content}</Body>
							}
						</Container>
					</BodyContainer>
					)
			})}
			</ContentWrapper>
		</Page>
    )
}

export default About;