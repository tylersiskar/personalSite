import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LinkGroup } from './Links';
import { Title } from './Typography';
import ColorDial from './ColorDial/ColorDial';
import MenuNav from './icebox/MenuNav';
import colors from '../colors/colors';

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


const ContactButtonWrapper = styled.div`
  display: flex;
  padding-right: 32px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
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

const Button = styled.button`
  background: transparent;
  padding: 0;
  border: 0;
  margin: 0;
  height: 44px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
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
    showNav: false,
    showModal: false,
    unmountModal: false
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

  _openContactPage = bool => {
    let overflow = "";
    if(bool) {
      overflow = "hidden";
    }
    document.body.style.overflow = overflow;
    this.setState({ showModal: bool });
    setTimeout(() => {
      this.setState({ unmountModal: bool });
    }, 200);
  };

  render() {
    const { active, background} = this.props;
  	return(
      <FlexCol>
    {this.state.unmountModal && <MenuNav 
        background={background}
        onClick={e => this._openContactPage(false)}
        open={this.state.showModal}/>}
      <Head>
    		<LeftHeader 
            background={background}
            active={active !== "homepage" && active !== "contact" && active !== "travel" && this.state.mounted}
            >
          <StyledLink to='/redesign' onMouseOver={() => this.setState({ name: 'tyler siskar!'})} onMouseLeave={() => this.setState({ name: 'tyler siskar.'})}>
            <Title size={"small"} logo bold>
            {this.state.name}
            </Title>
          </StyledLink>
    		</LeftHeader>
        <ContactButtonWrapper>
        <Button onClick={e => this._openContactPage(true)}> 
          <Title size="xSmall" bold color={colors.darkGray}> contact </Title>
        </Button>
        </ContactButtonWrapper>
      </Head>
      <SideNav showNav={this.state.showNav} background={background}>
        <FlexRow>
          <LinkGroupContainer>
          <LinkGroup activeRoute={active} links={this.props.links} />
          </LinkGroupContainer>
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