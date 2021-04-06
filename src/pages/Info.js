import React from 'react';
import styled from 'styled-components';
import { Title, Subtitle } from '../typography';

const Page = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background: black;
	text-align: center;
	padding: 0 32px;
	box-sizing: border-box;
`;

const StyledA = styled.a`
	text-decoration: none;
	color: white;
	&:hover {
		cursor: pointer;
		color: blue;
	}
`;

const Info = props => {
	return(
		<Page id="about">
		<div style={{paddingBottom: 20}}>
		<Title size="xLarge" bold color="white"> Rebuild in progress.</Title>
		</div>
		<Subtitle color="white"> To see the previous version, click 
		<StyledA href="tylersiskar.com" >
		{` here!`} 
		</StyledA>
		</Subtitle>
		</Page>
    )
}

export default Info;