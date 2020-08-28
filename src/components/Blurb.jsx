import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../colors/colors';
import { Body } from './Typography';

const propTypes = {
	children: PropTypes.node,
	text: PropTypes.string,
	view: PropTypes.bool,
	fontSize: PropTypes.number,
	fontColor: PropTypes.string,
	backgroundColor: PropTypes.string
};

const defaultProps = {
	children: undefined,
	text: undefined,
	fontSize: 16,
	backgroundColor: colors.gold
}

const BlurbContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	color: ${({ color }) => color};
	background-color: ${({ backgroundColor }) => backgroundColor};
	border-radius: 10px;
	width: 50%;
	min-height: 100px;
	padding: 16px;
	font-family: Helvetica;
	font-size: ${({ fontSize }) => fontSize}px;
	margin: 0 12px 12px 0;
  	box-shadow: lightgray 0px 5px 10px;

	@media (min-width: 767px) {
		width: 50%;
	}
	@media (min-width: 320px) and (max-width: 767px) {
		width: 100%;
		margin-right: 0;
		
	}
`;

const Blurb = props => {
		const { children, text, fontSize, fontColor, backgroundColor, title } = props;
		return(
			<Fragment>
			<BlurbContainer color={fontColor} fontSize={fontSize} backgroundColor={backgroundColor}>
			{title && <Body size="large" color={colors.forestGreen} bold> {title} </Body>}
			{text ? text : children}
			</BlurbContainer>
			</Fragment>
		)
};

Blurb.propTypes = propTypes;
Blurb.defaultProps = defaultProps;

export default Blurb;