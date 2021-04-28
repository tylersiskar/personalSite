import React from 'react';
import styled from 'styled-components';
import { Title, Subtitle, Body, Button } from '../components';
import WorldMap from '../worldmap/WorldMap';
import { select, selectAll } from 'd3';

const Page = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100%;
  min-height: calc(100vh - 100px);
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

const BodyWrapper = styled.div`
	display: flex;
	padding-bottom: 24px;
    width: 50%;
    padding-right: 24px;
`;

const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 16px;
`;
const Map = ({ data }) => {
    const _openPrompt = e => {
        selectAll('path').attr('fill', '#9c9c9c');
        let value = prompt('Enter a country! (Case sensitive)');
        value = value?.split(' ').join('.');
        console.log(select(`.country${value}`));
        selectAll(`.country${value}`).attr('fill', '#FB4D3D');
    }
    return (
        <Page>
            <ContentWrapper>
                <div style={{ display: 'flex', flexBasis: '50%' }}>
                    <FlexCol>
                        <TitleWrapper>
                            <Title color="white" size="xLarge" bold> Find a country! </Title>
                        </TitleWrapper>
                        <SubtitleWrapper>
                            <Subtitle size="medium" bold color="white" style={{ paddingRight: 12 }}>How to play</Subtitle>
                        </SubtitleWrapper>
                        <div style={{ display: 'flex' }}>
                            <BodyWrapper>
                                <Body color="white" size="medium">When you click on the Start button, you will be prompted to enter a country name. After entering the name, the country will be identified on the world map. Enjoy!</Body>
                            </BodyWrapper>
                            <Button onClick={_openPrompt} label="Start" />
                        </div>
                        <WorldMap />
                    </FlexCol>
                </div>
            </ContentWrapper>
        </Page >
    )
}

export default Map;