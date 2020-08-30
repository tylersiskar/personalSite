import React, { Component } from 'react';
import styled from 'styled-components';
import { LinkGroup } from '../components/Links';
import colors from '../colors/colors';
import plant from '../images/plant.jpg';
import buffalo from '../images/buffalo.jpg';
import ubbull from '../images/ubbull.jpg';
import { Card } from '../components/Cards';

const Home = styled.div`
	height: 100%;
	position: relative;
	display: flex;
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

class TestPersonalPage extends Component {
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
					<LinkGroup activeRoute="about" links={this.props.links} />
					</LeftMain>
					<RightMain src={plant} mount={this.state.mounted}>
						<Content>
							<CardWrapper>
								<Card title="Hometown" content="I currently live in Clarence Center, New York and have lived in the WNY area my entire life." image={buffalo}/>
							</CardWrapper>
							<CardWrapper>
								<Card title="Education" content="I went to Clarence High School and the University at Buffalo for undergrad, where I completed a degree in Computational Physics with a Mathematics minor. " image={ubbull}/>
							</CardWrapper>
						</Content>
					</RightMain>
				</Home>
		)
	}
};


export default TestPersonalPage;