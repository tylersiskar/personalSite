import React, { Component } from 'react';
import styled from 'styled-components';
import { Blurb, LinkGroup } from '../components';
import colors from '../colors/colors';
import logo from '../images/react.png';

const Home = styled.main`
	height: 100vh;
	position: relative;
	display: flex;

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
	display: flex;
	position: relative;
	width: 50%;
	transition: width .35s ease;
	${({ mount }) => mount && `
		width: 75%;
	`};
	height: 100%;
	background-color: white;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;


const Content = styled.div`
	display: flex;
	color: ${colors.forestGreen};
	padding: 0 44px;
	@media (min-width: 767px) {
		flex-direction: row;
	}
	@media (min-width: 320px) and (max-width: 767px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 20px;
		
	}
`;


const StyledImage = styled.div`
	border-radius: 20px;
	background-position: center;
	background-size: cover;
	background-image: url(${({ src }) => src});
	@media (min-width: 767px) {
		height: 50%;
		width: 50%;
	}
	@media (min-width: 320px) and (max-width: 767px) {
		width: 100%;
		height: 100%;
	}
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
						<LinkGroup activeRoute="development" />
					</LeftMain>
					<RightMain mount={this.state.mounted}>
						<Content>
							<Blurb title="Programming Languages" fontSize={20}>
								React, React Native, Java, Python
							</Blurb>
							<Blurb title="Projects" fontSize={20} backgroundColor={colors.mintCream}>
								Verizon Design System, Burner Mobile App, Finta Web App, Personal Website, Budgeting App from college, Social Media App 
							</Blurb>
						</Content>
				 		<StyledImage src={logo} />
					</RightMain>
				</Home>
		)
	}
};


export default TestDevelopmentPage;