import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import colors from '../colors/colors';

const Home = styled.main`
	background-color: ${colors.mintCream};
	height: 100vh;
`;

const Development = styled.div`
	width: auto;
	height: 100%;
	padding: 0 15px;
	background-color: ${colors.beauBlue};
	opacity: 0.6;
	font-weight: 800;
	font-family: Impact;
	font-size: 64px;
`;


class DevelopmentPage extends Component {

	render() {


		return(
			<Home>
			<Header />
				<Development>
				This is where i will talk about my developing experience.
				</Development>
			</Home>
		)
	}
};

export default DevelopmentPage;