import React, { Component } from 'react';
import styled from 'styled-components';
import { Blurb } from '../components';
import { Link } from 'react-router-dom';
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

const StyledLink = styled(Link)`
	color: ${({ yes }) => yes ? 'lightgray' : 'white'};
	font-size: 44px;
	text-decoration: none;
	position: relative;
	padding-left: 44px;
	left: 0;
	transition: left .35s ease;
	&:hover {
		opacity: 0.7;
		left: 32px;
	}
`;


const Content = styled.div`
	display: flex;
	color: ${colors.forestGreen};
	padding: 0 44px;
`;


const StyledImage = styled.img`
	height: 200px;
	border-radius: 20px;
	width: 25%;
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
					<StyledLink to="/personal"> personal </StyledLink>
					<StyledLink yes to="/development"> development </StyledLink>
					<StyledLink to="/hobbies"> hobbies </StyledLink>
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