import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Editorial from '../components/Editorial';
import Logo from '../components/Logo';
import Link from '../components/Link';

const propTypes = {
	on: PropTypes.bool
};

const defaultProps = {
	on: false
}

const Home = styled.header`
  background-color: skyblue;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Header = styled.div`
	display: flex;
	height: 15%;
  background-color: skyblue;
	position: relative;
	padding: 24px;
	box-sizing: border-box;
	width: 100%;
	top: 0;
	align-items: center;
	justify-content: space-between; 
`;

const HeaderLinks = styled.li`
	float: left;
	list-style: none;
`;

const List = styled.ul`
	display: flex;
`;

const MainPage = styled.div`
	display: flex;
	position: relative;
	padding: 24px;
	width: 100%;
	flex-direction: column;
`;

const content = `Lorem ipsum dolor sit amet, dolore volumus urbanitas sea te, has id justo augue singulis. Cu reprimique interpretaris est, ut ius aperiri eripuit dignissim. In probatus comprehensam mei, pri feugiat ceteros invenire ne. Pro te altera detraxit, audire consulatu no mea, vim platonem tincidunt democritum ne. Posse menandri ut has, reque adipiscing ad pri. Illud epicurei erroribus at pro, elitr graeco eripuit cum an.
Lorem ipsum dolor sit amet, dolore volumus urbanitas sea te, has id justo augue singulis. Cu reprimique interpretaris est, ut ius aperiri eripuit dignissim. In probatus comprehensam mei, pri feugiat ceteros invenire ne. Pro te altera detraxit, audire consulatu no mea, vim platonem tincidunt democritum ne. Posse menandri ut has, reque adipiscing ad pri. Illud epicurei erroribus at pro, elitr graeco eripuit cum an.
Lorem ipsum dolor sit amet, dolore volumus urbanitas sea te, has id justo augue singulis. Cu reprimique interpretaris est, ut ius aperiri eripuit dignissim. In probatus comprehensam mei, pri feugiat ceteros invenire ne. Pro te altera detraxit, audire consulatu no mea, vim platonem tincidunt democritum ne. Posse menandri ut has, reque adipiscing ad pri. Illud epicurei erroribus at pro, elitr graeco eripuit cum an
Lorem ipsum dolor sit amet, dolore volumus urbanitas sea te, has id justo augue singulis. Cu reprimique interpretaris est, ut ius aperiri eripuit dignissim. In probatus comprehensam mei, pri feugiat ceteros invenire ne. Pro te altera detraxit, audire consulatu no mea, vim platonem tincidunt democritum ne. Posse menandri ut has, reque adipiscing ad pri. Illud epicurei erroribus at pro, elitr graeco eripuit cum an
Lorem ipsum dolor sit amet, dolore volumus urbanitas sea te, has id justo augue singulis. Cu reprimique interpretaris est, ut ius aperiri eripuit dignissim. In probatus comprehensam mei, pri feugiat ceteros invenire ne. Pro te altera detraxit, audire consulatu no mea, vim platonem tincidunt democritum ne. Posse menandri ut has, reque adipiscing ad pri. Illud epicurei erroribus at pro, elitr graeco eripuit cum an
Lorem ipsum dolor sit amet, dolore volumus urbanitas sea te, has id justo augue singulis. Cu reprimique interpretaris est, ut ius aperiri eripuit dignissim. In probatus comprehensam mei, pri feugiat ceteros invenire ne. Pro te altera detraxit, audire consulatu no mea, vim platonem tincidunt democritum ne. Posse menandri ut has, reque adipiscing ad pri. Illud epicurei erroribus at pro, elitr graeco eripuit cum an
Lorem ipsum dolor sit amet, dolore volumus urbanitas sea te, has id justo augue singulis. Cu reprimique interpretaris est, ut ius aperiri eripuit dignissim. In probatus comprehensam mei, pri feugiat ceteros invenire ne. Pro te altera detraxit, audire consulatu no mea, vim platonem tincidunt democritum ne. Posse menandri ut has, reque adipiscing ad pri. Illud epicurei erroribus at pro, elitr graeco eripuit cum an
Lorem ipsum dolor sit amet, dolore volumus urbanitas sea te, has id justo augue singulis. Cu reprimique interpretaris est, ut ius aperiri eripuit dignissim. In probatus comprehensam mei, pri feugiat ceteros invenire ne. Pro te altera detraxit, audire consulatu no mea, vim platonem tincidunt democritum ne. Posse menandri ut has, reque adipiscing ad pri. Illud epicurei erroribus at pro, elitr graeco eripuit cum an
Lorem ipsum dolor sit amet, dolore volumus urbanitas sea te, has id justo augue singulis. Cu reprimique interpretaris est, ut ius aperiri eripuit dignissim. In probatus comprehensam mei, pri feugiat ceteros invenire ne. Pro te altera detraxit, audire consulatu no mea, vim platonem tincidunt democritum ne. Posse menandri ut has, reque adipiscing ad pri. Illud epicurei erroribus at pro, elitr graeco eripuit cum an
Lorem ipsum dolor sit amet, dolore volumus urbanitas sea te, has id justo augue singulis. Cu reprimique interpretaris est, ut ius aperiri eripuit dignissim. In probatus comprehensam mei, pri feugiat ceteros invenire ne. Pro te altera detraxit, audire consulatu no mea, vim platonem tincidunt democritum ne. Posse menandri ut has, reque adipiscing ad pri. Illud epicurei erroribus at pro, elitr graeco eripuit cum anLorem ipsum dolor sit amet, dolore volumus urbanitas sea te, has id justo augue singulis. Cu reprimique interpretaris est, ut ius aperiri eripuit dignissim. In probatus comprehensam mei, pri feugiat ceteros invenire ne. Pro te altera detraxit, audire consulatu no mea, vim platonem tincidunt democritum ne. Posse menandri ut has, reque adipiscing ad pri. Illud epicurei erroribus at pro, elitr graeco eripuit cum an
`;

class HomePage extends Component {
	state = {
		mounted: false
	}

	_handleScroll = (e) => {
	  this.setState({
	    mounted: true
	  });
	}
	
	componentDidMount() { 
		console.log('y')
  	window.addEventListener('scroll', this._handleScroll);
		
	}

	componentWillUnmount(){ 
		window.removeEventListener('scroll', this._handleScroll);
	}

	render() {


		return(
			<Home>
				<Header>
					<Logo> TheZine </Logo>
					<List>
						<HeaderLinks>
							<Link> Today </Link>
						</HeaderLinks>
						<HeaderLinks> <Link> Music </Link> </HeaderLinks>
						<HeaderLinks> <Link> Sports </Link> </HeaderLinks>
						<HeaderLinks> <Link> Technology </Link> </HeaderLinks>
						<HeaderLinks> <Link> Us Guys </Link> </HeaderLinks>
					</List>
				</Header>
				<MainPage>
				<Editorial view={this.state.mounted} text={content}/>
				</MainPage>
			</Home>
		)
	}
};

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;

export default HomePage;