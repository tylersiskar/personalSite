import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
	children: PropTypes.node,
	text: PropTypes.string,
	view: PropTypes.bool
};

const defaultProps = {
	children: undefined,
	text: undefined
}

const Blurb = styled.div`
	display: flex;
	flex-direction: column;
	color: black;
	background-color: beige;
	border-radius: 10px;
	width: 50%;
	min-height: 200px;
	padding: 16px;
	opacity: 0;
	${({ view }) => view && `
		opacity: 1;
		transition: opacity ease 3s;
	`
	};

	&:hover {
		cursor: pointer;
	}

	font-size: 16px;
	font-family: Comic Sans;
`;

class Editorial extends Component {
	state = {
		mounted: false
	}



	_onClick = () => {
		const { mounted } = this.state;
		if(mounted === false) {
			this.setState({mounted: true});
		}
		else{
			this.setState({mounted: false});
		}
	}
	
	render(){
		const { children, text } = this.props;
		return(
			<Blurb onClick={this._onClick} view={this.props.view}>
			{text ? text : children}
			</Blurb>
		)
	}
};

Editorial.propTypes = propTypes;
Editorial.defaultProps = defaultProps;

export default Editorial;