import React, { Component } from 'react';
import styled from 'styled-components';
import { LinkGroup } from '../components/Links';
import colors from '../colors/colors';
import plant from '../images/plant.jpg';
import code from '../images/code.jpg';
import react from '../images/react.png';
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
	flex-direction: column;
	background-color: ${colors.forestGreen};
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
		mounted: false,
		showMore: false
	}
	componentDidMount() {
		setTimeout(() => this.setState({ mounted: true }), 10);
	}

	_onClick = e => {
		console.log('hi', this.state);
		this.setState({ showMore: true})
	}
	render() {

		return(
				<Home>
					<LeftMain mount={this.state.mounted}>
						<LinkGroup activeRoute="development" links={this.props.links} />
					</LeftMain>
					<RightMain mount={this.state.mounted} src={plant}>
						<Content>
							<CardWrapper>
								<Card title="programming languages" content="React, React Native, Java, Python" image={react}/>
							</CardWrapper>
							<CardWrapper>
								<Card title="projects" content="Verizon Design System, Burner Mobile App, Finta Web App, Personal Website, Budgeting App from college, Social Media App " image={code}/>
							</CardWrapper>
						</Content>
					</RightMain>
				</Home>
		)
	}
};


export default TestDevelopmentPage;