import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import colors from '../colors/colors';

const Home = styled.main`
	background-color: ${colors.mintCream};
	height: 100vh;
`;

const Personal = styled.div`
	width: auto;
	height: 100%;
	padding: 0 15px;
	background-color: blue;
	opacity: 0.6;
	font-weight: 800;
	font-family: Impact;
	font-size: 64px;
`;


class PersonalPage extends Component {
	state = {
	}

	render() {


		return(
			<Home>
			<Header />
				<Personal>
				This is where i will talk about myself
				</Personal>
			</Home>
		)
	}
};

export default PersonalPage;