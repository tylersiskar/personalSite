import React, { Component } from 'react';
import styled from 'styled-components';
import { Header, Blurb } from '../components';
import colors from '../colors/colors';

const Home = styled.main`
	background-color: ${colors.mintCream};
	height: 100vh;
	width: 100vw;
`;

const Hobbies = styled.div`
	width: 100%;
	background-color: ${colors.beauBlue};
	font-weight: 800;
	font-family: Impact;
	font-size: 64px;
`;


const ContentWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

class HobbiesPage extends Component {
	state = {
	}

	render() {


		return(
			<Home>
			<Header />
				<ContentWrapper>
					<Hobbies>
					This is where i will talk about my hobbies!
					</Hobbies>
					<Blurb title="Sports" fontSize={20} backgroundColor={colors.powderBlue}>
						I'm a lifelong Bills fan, and am excited about the upcoming season! I enjoy playing recreational basketball, golf, and baseball. 
					</Blurb>
				</ContentWrapper>
			</Home>
		)
	}
};

export default HobbiesPage;