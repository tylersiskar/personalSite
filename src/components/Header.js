import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LogoMenu from './LogoMenu';
import { LinkGroup } from './Links';
import { Title } from './Typography';
import ColorDial from './ColorDial/ColorDial';

const propTypes = {
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick: () => {}
};

const Head = styled.header`
  display: flex;
  position: sticky;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
`;

const LeftHeader = styled.div`
  display: flex;
  background-color: ${({ background }) => background};
  position: relative;
  width: 50%;
  transition: width .25s ease;
  ${({ active }) => active && `
    width: 25%;
  `};
  top: 0;
  z-index: 999;
  color: white;
  padding-left: 44px;
  box-sizing: border-box;
  min-width: 200px;
  @media screen and (max-width: 767px) {
    padding-left: 16px;
  }
`;

const LogoWrapper = styled.div`
  padding-right: 32px;
    @media screen and (max-width: 767px) {
      padding-right: 16px;
    }
  ${({ show }) => !show && `
    @media screen and (max-width: 767px) {
      display: none;
    }
  `};
`;

const RightHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 16px;
  ${({ show }) => !show && `
  @media screen and (min-width: 767px) {
    display: none;
  }
  `}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  width: 24px;
  height: 24px;
  background-color: ${({ color }) => color};
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 5px;
  justify-content: space-around;
`;

const Line = styled.span`
  height: 2px;
  min-width: 12px;
  width: 100%;
  background-color: white;
  display: flex;
  position: relative;
`;


const LinkGroupContainer = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;

`;

const DialContainer = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 767px) {
    justify-content: center;
  }
  width: 100%;
`;

const SideNav = styled.span`
  display: flex;
  background-color: ${({ background }) => background};
  padding-right: 16px;
  flex-direction: column;
  height: 0;
  transition: height .35s ease;
  ${({ showNav }) => showNav && `
    height: 175px;
    padding: 16px 16px 16px 0;
  `};
  @media (min-width: 767px) {
    display: none;
  }
`;

const FlexCol = styled.span`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const FlexRow = styled.span`
  display: flex;
  padding-bottom: 16px;
`;

class Header extends Component {
  state = {
    mounted: false,
    name: 'tyler siskar.',
    showNav: false
  }

  componentDidMount() {
    setTimeout(() => this.setState({ mounted: true }), 10);
  }

  _onButtonClick = () => {
    this.setState({ showNav: !this.state.showNav });
  }

  _onClickColor = (background) => {
    this.props.onClickColor(background);
  }

  render() {
    const { active, background} = this.props;
  	return(
      <FlexCol>
      <Head>
    		<LeftHeader 
            background={background}
            active={active !== "homepage" && active !== "contact" && active !== "travel" && this.state.mounted}
            >
          <StyledLink to='/homepage' onMouseOver={() => this.setState({ name: 'tyler siskar!'})} onMouseLeave={() => this.setState({ name: 'tyler siskar.'})}>
            <Title size="small" logo bold>
            {this.state.name}
            </Title>
          </StyledLink>
    		</LeftHeader>
        <LogoWrapper show={active === 'homepage'}>
          <LogoMenu color={background}/>
        </LogoWrapper>
      {active !== 'homepage' && active !== "contact" && 
        <RightHeader>
          <HamburgerButton color={background} onClick={this._onButtonClick}>
            <Line />
            <Line />
            <Line />
          </HamburgerButton>
        </RightHeader>}
      </Head>
      <SideNav showNav={this.state.showNav} background={background}>
        <FlexRow>
          <LinkGroupContainer>
            <LinkGroup activeRoute={active} links={this.props.links} />
          </LinkGroupContainer>
        <LogoMenu color="white"/>
        </FlexRow>
          <DialContainer>
            <ColorDial background={this.props.background} colorDial={this.props.colors} onClick={this._onClickColor}/>
          </DialContainer>
      </SideNav>
      </FlexCol>

  	)
  }
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;