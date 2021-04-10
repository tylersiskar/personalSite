import React from 'react';
import styled from 'styled-components';

const CloseButtonWrapper = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  &:hover {
    outline: none;
    svg {
      fill: gray;
    }
  }
`;
  
const CloseButton = ({ onClick }) => {
    return (
      <CloseButtonWrapper onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 190" width="40px" height="40px" fill="#FFF">
          <path d="M190.73,3.33,2.67,188.81m184.48,3L1.41,6.13,6.13,1.41,191.86,187.14ZM1.41,187.14,187.14,1.41l4.72,4.72L6.13,191.86Z" stroke="#FFF" strokeMiterlimit="10" strokeWidth="1"/>
        </svg>
      </CloseButtonWrapper>
    )
};

export default CloseButton;