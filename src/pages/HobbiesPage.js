import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import colors from '../colors/colors';

const Home = styled.main`
	background-color: ${colors.mintCream};
	height: 100vh;
	width: 100vw;
`;

const Hobbies = styled.div`
	height: 100%;
	background-color: ${colors.beauBlue};
	opacity: 0.6;
	font-weight: 800;
	font-family: Impact;
	font-size: 64px;
`;


class HobbiesPage extends Component {
	state = {
	}

	render() {


		return(
			<Home>
			<Header />
				<Hobbies>
				This is where i will talk about my hobbies!
				</Hobbies>
			</Home>
		)
	}
};

export default HobbiesPage;