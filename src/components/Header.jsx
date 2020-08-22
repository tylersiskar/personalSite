import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Logo from './Logo';
import AnchorLink from './Link';
import { Link } from 'react-router-dom';
import LogoMenu from './LogoMenu';
import MenuNav from './MenuNav';
import Button from './Button';
import colors from '../colors/colors';

const propTypes = {
	children: PropTypes.node,
  onClick: PropTypes.func,
};

const defaultProps = {
	children: undefined,
  onClick: () => {}
};



const headerLinks = [
  {
    name: 'personal',
    url: 'https://www.complex.com/',
    href: "/#/music"
  },
  {
    name: 'development',
    url: 'https://www.complex.com/',
    dropdown: false
  },
  {
    name: 'hobbies',
    url: 'https://www.complex.com/',
    dropdown: false
  },
  {
    name: 'more',
    url: 'https://www.complex.com/',
    lastChild: true
  }
];


const Head = styled.header`
  display: block;
  position: sticky;
  width: 100%;
`;

const StyledHeader = styled.div`
  display: flex;
  background-color: ${colors.mintCream};
  position: relative;
  padding: 10px 15px;
  margin: auto;
  width: 100%;
  height: 65px;
  top: 0;
  align-items: center;
  justify-content: space-around; 
  z-index: 999;
`;

const HeaderLinks = styled(Link)`
  display: inline-flex;
  float: left;
  text-decoration: none;
  a {
    color: ${colors.forestGreen}
  }
  button {
    color: ${colors.forestGreen}
  }
  list-style: none;
  &:last-child:before {
      content: "";
      height: 24px;
      border-left: 1px solid ${colors.nyanza};
      margin-left: 7px;
      margin-right: 7px;
      float: left;
  }

  &:focus {
    outline: none;
    a {
      border: 1px dashed black;
    }
    button {
      border: 1px dashed black;
    }
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Header = props => {
	const { children, onClick } = props;

  const [ viewNav, setViewNav ] = useState(false); 

  function _handleClick(e) {
    setViewNav(true);
    props.onClick();
  }

  function _onClose() {
    setTimeout(function(){ 
      setViewNav(false);
      props.onClick();
   }, 400);
  }
  
	return(
    <Head>
      {viewNav && <MenuNav visible={viewNav} onClick={_onClose}/>}
  		<StyledHeader>
        <Logo/>
        <List>
        {headerLinks.map((item, index) => {
          let Item = item.lastChild ? Button : AnchorLink;
            return(
              <HeaderLinks to={item.lastChild ? '/homepagez' : `/${item.name}`} tabIndex={0}  href={item.href} onClick={item.lastChild ? _handleClick : onClick}>
                <Item type={'dropdown'} href={item.href} tabIndex={-1}>
                  {item.name}
                </Item>
              </HeaderLinks>)
          })}
        </List>
        <LogoMenu />
  		</StyledHeader>
    </Head>
	)
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;