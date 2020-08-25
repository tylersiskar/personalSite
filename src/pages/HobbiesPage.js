import React, { Component } from 'react';
import styled from 'styled-components';
import { Blurb, Image } from '../components';
import colors from '../colors/colors';
import background from '../colors/background.jpg';
import avengers from '../colors/avengers.jpg';

const Home = styled.main`
	height: 100vh;
`;

const Hobbies = styled.div`
	width: 100%;
	background-color: ${colors.beauBlue};
	font-weight: 800;
  font-family: Helvetica;
	font-size: 48px;
	text-align: center;
`;


const ContentWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const StyledImage = styled.img`
	height: 200px;
	border-radius: 20px;
`;

class HobbiesPage extends Component {
	state = {
	}

	render() {


		return(
			<Home>
					<Image alt="" src={background} />
				<ContentWrapper>
					<Hobbies>
					Hobbies & Interests
					</Hobbies>
					<Blurb title="Sports" fontSize={20} backgroundColor={colors.powderBlue} fontColor={colors.darkGray}>
						I'm a lifelong Bills fan, and am excited about the upcoming season! I enjoy playing recreational basketball, golf, and baseball. 
					</Blurb>
					<Blurb title="Movies" fontSize={20} backgroundColor={colors.gold} fontColor={colors.darkGray}>
						I'm a huge Marvel fan, I've seen all the movies multiple times. Interstellar is also one of my favorite movies.
					</Blurb>
					<Blurb title="Music" fontSize={20} backgroundColor={colors.forestGreen} fontColor={colors.darkGray}>
						Most of my music interest lies in hip-hop/rap music, but I have been listening to more pop lately. Favorite artists: J Cole, Kendrick Lamar, Drake. Lately I've listened to Harry Styles' and Justin Bieber's latest albums. 
					</Blurb>
					<StyledImage src={avengers} />
				</ContentWrapper>
			</Home>
		)
	}
};

export default HobbiesPage;