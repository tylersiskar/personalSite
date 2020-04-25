import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
};

const defaultProps = {
}

const Music = styled.div`
	width: auto;
	height: 100%;
	padding: 0 15px;
	background-color: blue;
	opacity: 0.6;
	font-weight: 800;
	font-family: Impact;
	font-size: 64px;
`;


class MusicPage extends Component {
	state = {
	}

	render() {


		return(
			<Music>
			{"lusic"}
			</Music>
		)
	}
};

MusicPage.propTypes = propTypes;
MusicPage.defaultProps = defaultProps;

export default MusicPage;