import React from 'react';
import styled from 'styled-components';
import { ShuffleIcon } from './shuffleIcon';

const IconWrapper = styled.span`
 	display: block;
 	height: 48px;
 	width: 48px;
 	cursor: pointer;
 	&:hover {
 		svg g {
 			fill: gray;
 		}
 	}
 	svg g {
 		fill: ${({color}) => color};
 	}
`;


const Shuffle = props => {
	const { color} = props;

	return (
		<IconWrapper {...props} color={color}>
			<ShuffleIcon />
		</IconWrapper>
	)
		 	 
};

export default Shuffle;