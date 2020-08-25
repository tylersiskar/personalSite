import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from './Logo';
import LogoMenu from './LogoMenu';
import colors from '../colors/colors';

const propTypes = {
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick: () => {}
};



const headerLinks = [
  {
    name: 'personal',
  },
  {
    name: 'development',
  },
  {
    name: 'hobbies',
  },
  {
    name: 'more',
    lastChild: true
  }
];


const Head = styled.header`
  display: flex;
  position: sticky;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
`;

const LeftHeader = styled.div`
  display: flex;
  background-color: ${colors.forestGreen};
  position: relative;
  width: 50%;
  top: 0;
  z-index: 999;
  font-family: Helvetica;
  text-transform: lowercase;
  font-size: 64px;
  color: white;
  padding-left: 44px;
  box-sizing: border-box;
`;

const LogoWrapper = styled.div`
  padding-right: 32px;
`;

const TestHeader = props => {
  
	return(
    <Head>
  		<LeftHeader>
      Tyler siskar.
  		</LeftHeader>
      <LogoWrapper>
      <LogoMenu />
      </LogoWrapper>
    </Head>
	)
};

TestHeader.propTypes = propTypes;
TestHeader.defaultProps = defaultProps;

export default TestHeader;