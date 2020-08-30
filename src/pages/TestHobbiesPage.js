import React, { Component } from 'react';
import styled from 'styled-components';
import { LinkGroup } from '../components/Links';
import colors from '../colors/colors';
import vine from '../images/plant.jpg';
import ironman from '../images/ironman.jpg';
import music from '../images/music.jpeg';
import bills from '../images/bills.png';
import { Card } from '../components/Cards';

const Home = styled.div`
	position: relative;
	display: flex;
	height: 100%;
	overflow: hidden;
`;

const LeftMain = styled.div`
	display: flex;
	position: relative;
	min-width: 200px;
	width: 50%;
	transition: width .35s ease;
	${({ mount }) => mount && `
		width: 25%;
	`};
	height: 100%;
	background-color: ${colors.forestGreen};
	flex-direction: column;

`;

const RightMain = styled.div`
	position: relative;
	padding-top: 32px;
	width: 50%;
	transition: width .35s ease;
	${({ mount }) => mount && `
		width: 75%;
	`};
	height: 100%;
	overflow: auto;
	background-position: center;
	background-size: cover;
	background-image: url(${({ src }) => src});
	&::after {
	  content: "";
	  position: absolute;
	  z-index: 1;
	  top: 0;
	  left: 0;
	  pointer-events: none;
	  background-image: linear-gradient(to top, 
	                    rgba(255,255,255, 0), 
	                    rgba(255,255,255, 1) 90%);
	  width: 100%;
	  height: 4em;
`;

const Content = styled.div`
	padding: 0 44px;
	height: 100%;
	@media (min-width: 320px) and (max-width: 767px) {
		padding: 0 20px;
		width: 100%;
	}
`;

const CardWrapper = styled.span`
	display: flex;
	padding-bottom: 224px;
`;

class TestDevelopmentPage extends Component {
	state = {
		mounted: false
	}
	componentDidMount() {
		setTimeout(() => this.setState({ mounted: true }), 10);
	}
	render() {

		return(
				<Home>
					<LeftMain mount={this.state.mounted}>
						<LinkGroup activeRoute="hobbies" links={this.props.links} />
					</LeftMain>
					<RightMain src={vine} mount={this.state.mounted}>
						<Content>
							<CardWrapper>
								<Card title="Sports" content="I'm a lifelong Bills fan, and am excited about the upcoming season! I enjoy playing recreational basketball, golf, and baseball. " image={bills}/>
							</CardWrapper>
							<CardWrapper>
								<Card title="Movies" content="I'm a huge Marvel fan, I've seen all the movies multiple times. Interstellar is also one of my favorite movies." image={ironman}/>
							</CardWrapper>
							<CardWrapper>
								<Card title="Music" content="Most of my music interest lies in hip-hop/rap music, but I have been listening to more pop recently. Favorite artists: J Cole, Kendrick Lamar, Drake. Lately I've listened to Harry Styles' and Justin Bieber's newest albums." image={music}/>
							</CardWrapper>
						</Content>
					</RightMain>
				</Home>
		)
	}
};


export default TestDevelopmentPage;