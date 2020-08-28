import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../colors/colors';
import { Body } from './Typography';
import Button from './Button';

const propTypes = {
	children: PropTypes.node,
	text: PropTypes.string,
	fontSize: PropTypes.number,
	fontColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	borderColor: PropTypes.string,
	width: PropTypes.string
};

const defaultProps = {
	children: undefined,
	text: undefined,
	fontSize: undefined,
	backgroundColor: colors.gold,
	borderColor: undefined,
	width: '50%'
}

const BlurbContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	text-align: center;
	color: ${({ color }) => color};
	background-color: ${({ backgroundColor }) => backgroundColor};
	border: ${({ borderColor }) => borderColor ? `3px solid ${borderColor}` : 'none'};
	border-radius: 10px;
	width: ${({ width }) => width};
	min-height: 100px;
	padding: 16px;
	font-family: Helvetica;
	font-size: ${({ fontSize }) => fontSize}px;
	margin: 0 12px 12px 0;
  	box-shadow: lightgray 0px 5px 10px;

	@media (min-width: 767px) {
		width: ${({ width }) => width};
	}
	@media (min-width: 320px) and (max-width: 767px) {
		width: 100%;
		margin-right: 0;
		
	}
`;

const Blurb = props => {
		const { children, text, fontSize, fontColor, backgroundColor, borderColor, title, width, showMore } = props;
		return(
			<Fragment>
			<BlurbContainer width={width} color={fontColor} fontSize={fontSize} backgroundColor={backgroundColor} borderColor={borderColor}>
			{title && <Body size="large" color={colors.forestGreen} bold> {title} </Body>}
			{text ? text : children}
			{showMore && <Button onClick={props.onClick} type="dropdown" />}
			</BlurbContainer>
			</Fragment>
		)
};

Blurb.propTypes = propTypes;
Blurb.defaultProps = defaultProps;

export default Blurb;