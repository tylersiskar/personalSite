import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Blurb from '../components/Blurb';
import Header from '../components/Header';
import MusicPage from './MusicPage';
import colors from '../colors/colors';

const propTypes = {
	on: PropTypes.bool
};

const defaultProps = {
	on: false
}

const Home = styled.main`
	background-color: ${colors.mintCream};
	height: 100vh;
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
					<Header />
					<MainPage>
						<Blurb fontSize={32} fontColor={colors.darkGreen} text={content1}/>
						<MiddleRow>
							<Blurb fontSize={32} fontColor={colors.darkGreen} text={content2}/>
						</MiddleRow>
						<Blurb fontSize={32} fontColor={colors.darkGreen} text={content3}/>
					</MainPage>
				</Home>
		)
};

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;

export default HomePage;