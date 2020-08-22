import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../colors/colors';

const propTypes = {
	children: PropTypes.node,
	text: PropTypes.string,
	view: PropTypes.bool,
	fontSize: PropTypes.number,
	fontColor: PropTypes.string
};

const defaultProps = {
	children: undefined,
	text: undefined,
	fontSize: 16
}

const BlurbContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	color: ${({ color }) => color};
	background-color: ${colors.gold};
	border-radius: 10px;
	width: 50%;
	min-height: 100px;
	padding: 16px;
	font-family: Copperplate;
	text-transform: uppercase;
    font-weight: bold;
	font-size: ${({ fontSize }) => fontSize}px;
	z-index: -1;
	margin-bottom: 12px;
`;

const Blurb = props => {
		const { children, text, fontSize, fontColor } = props;
		return(
			<BlurbContainer color={fontColor} fontSize={fontSize}>
			{text ? text : children}
			</BlurbContainer>
		)
};

Blurb.propTypes = propTypes;
Blurb.defaultProps = defaultProps;

export default Blurb;