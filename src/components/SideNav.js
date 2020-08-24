import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import colors from '../colors/colors';
import Button from './Button';

const propTypes = {
};

const defaultProps = {
};

const SideNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  min-height: 100vh;
  position: absolute;
  top: 86px;
  right: 0;
  background-color: transparent;
  z-index: 999;
  box-shadow: -2px 5px 10px 1px ${colors.darkGray};
`;

const SideItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8px 0px;
  border-bottom: 2px solid ${colors.darkGray};
  background-color: ${colors.forestGreen};
  &:hover {
    cursor: pointer;
    border-left: 3px solid black;
    button {
      background-color: ${colors.forestGreen};
    }
  }
`;

const MenuItem = styled.span`
  border-bottom: 1px solid black;
  width: 100%; 
  background-color: #49A078;
  display: flex;
  justify-content: center;
  padding: 6px 0px;
`;

const SideNav = props => {
	const { data } = props;
  const [ menu, openMenu ] = useState(false);

  function _onClick(e, item) {
    console.log(menu, 'clicked button');
    item.projects ? openMenu(!menu) : openMenu(menu);
  }

	return(
		<SideNavWrapper>
      {data && data.map((item, index) => {
        return(
          <Fragment>
            <SideItem key={index} id={item.children} onClick={(e) => _onClick(e, item)}>
              <Button textColor={colors.darkGray}> {item.children} </Button>
            </SideItem>
              {menu && item.projects && item.projects.map(proj => {
                return <MenuItem id={item.children} key={proj}> {proj} </MenuItem>
              })}
          </Fragment>
        )
      })}
    </SideNavWrapper>
	)
};

SideNav.propTypes = propTypes;
SideNav.defaultProps = defaultProps;

export default SideNav;