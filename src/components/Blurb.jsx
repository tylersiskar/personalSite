import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../colors/colors';

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
	font-family: Copperplate;
	text-transform: uppercase;
    font-weight: bold;
	font-size: ${({ fontSize }) => fontSize}px;
	z-index: -1;
	margin-bottom: 12px;
  	box-shadow: lightgray 0px 5px 10px;
`;

const TitleContent = styled.span`
	font-size: ${({ fontSize }) => fontSize + 4}px;
`;

const Blurb = props => {
		const { children, text, fontSize, fontColor, backgroundColor, title } = props;
		return(
			<BlurbContainer color={fontColor} fontSize={fontSize} backgroundColor={backgroundColor}>
			{title && <TitleContent fontSize={fontSize}> {title} </TitleContent>}
			{text ? text : children}
			</BlurbContainer>
		)
};

Blurb.propTypes = propTypes;
Blurb.defaultProps = defaultProps;

export default Blurb;