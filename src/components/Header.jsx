import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from './Logo';
import AnchorLink from './Link';
import LogoMenu from './LogoMenu';
import MenuNav from './MenuNav';
import Button from './Button';
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
  display: block;
  position: sticky;
  width: 100%;
  box-shadow: lightgray 0px 5px 10px;
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

const HeaderLinks = styled.li`
  display: inline-flex;
  float: left;
  text-decoration: none;
  a {
    color: ${({ active }) => active ? colors.beauBlue : colors.forestGreen};
  }
  button {
    color: ${({ active }) => active ? colors.beauBlue : colors.forestGreen};
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
  const { sideNavData, active } = props;
  const [ viewNav, setViewNav ] = useState(false); 

  function _handleClick(e) {
    setViewNav(true);
    props.onClick && props.onClick();
  }

  function _onClick(e) {
    props.onClick && props.onClick();
  }

  function _onClose() {
    setTimeout(function(){ 
      setViewNav(false);
      props.onClick && props.onClick();
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
              <HeaderLinks tabIndex={0}  key={index} href={item.href} onClick={item.lastChild ? _handleClick : _onClick} active={active === item.name}>
                <Item to={item.lastChild ? '/homepagez' : `/${item.name}`}  type={'dropdown'} href={item.href} tabIndex={-1} active={active === item.name}>
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