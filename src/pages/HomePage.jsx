import React from 'react';
import styled from 'styled-components';
import { Blurb, Header, Image } from '../components';
import colors from '../colors/colors';
import background from '../colors/background.jpg';

const Home = styled.main`
	height: 100vh;
	position: relative;
`;

const MainPage = styled.div`
	display: flex;
	position: relative;
	padding: 24px;
	flex-direction: column;
`;

const MiddleRow = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
`;



const HomePage = props => {

	let content1 = `Hello! My name is Tyler Siskar, welcome to my page!`;
	let content2 = 'I am a React Developer who is in the process of making his own website.';
	let content3 = 'In the header, there are links to other sections where you\'ll learn more about me. In the top right you can access my social media on Facebook or Twitter. Enjoy!';
		return(
				<Home>
					<Image src={background} />
					<MainPage>
						<Blurb fontSize={32} fontColor={colors.darkGreen} backgroundColor={colors.powderBlue} text={content1}/>
						<MiddleRow>
							<Blurb fontSize={32} fontColor={colors.darkGreen} text={content2}/>
						</MiddleRow>
						<Blurb fontSize={32} fontColor={colors.darkGreen} backgroundColor="lavender" text={content3}/>
					</MainPage>
				</Home>
		)
};


export default HomePage;