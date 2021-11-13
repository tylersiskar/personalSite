import React from 'react';
import styled from 'styled-components';


const StyledBurger = styled.button`
  display: flex;
  position: absolute;
  top: 32px;
  right: 32px;
  flex-direction: column;
  justify-content: space-around;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
  @media screen and (min-width: 1024px) {
      display: none;
  }
`;
const InnerChild = styled.div`
    width: 32px;
    height: 3px;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
`;

const Burger = (props) => {
    const { open, setOpen } = props;
    return (
        <StyledBurger onClick={() => setOpen(!open)}>
            <InnerChild open={open} />
            <InnerChild open={open} />
            <InnerChild open={open} />
        </StyledBurger>
    )
};

export default Burger;