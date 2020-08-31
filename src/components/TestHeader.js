import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LogoMenu from './LogoMenu';
import colors from '../colors/colors';
import { Title } from './Typography';

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
`;

const LeftHeader = styled.div`
  display: flex;
  background-color: ${colors.forestGreen};
  position: relative;
  width: 50%;
  transition: width .35s ease;
  ${({ active }) => active && `
    width: 25%;
  `};
  top: 0;
  z-index: 999;
  color: white;
  padding-left: 44px;
  box-sizing: border-box;
  min-width: 200px;
`;

const LogoWrapper = styled.div`
  padding-right: 32px;
`;


const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;


class TestHeader extends Component {
  state = {
    mounted: false,
    name: 'tyler siskar.'
  }
  componentDidMount() {
    setTimeout(() => this.setState({ mounted: true }), 10);
  }
  render() {
	return(
    <Head>
  		<LeftHeader active={this.props.active !== "homepage" && this.props.active !== "contact" && this.state.mounted}>
        <StyledLink to='/homepage' onMouseOver={() => this.setState({ name: 'tyler siskar!'})} onMouseLeave={() => this.setState({ name: 'tyler siskar.'})}>
        <Title logo bold>
        {this.state.name}
        </Title>
        </StyledLink>
  		</LeftHeader>
      <LogoWrapper>
        <LogoMenu />
      </LogoWrapper>
    </Head>
	)
}
};

TestHeader.propTypes = propTypes;
TestHeader.defaultProps = defaultProps;

export default TestHeader;