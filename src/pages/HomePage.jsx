import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Editorial from '../components/Editorial';
import Header from '../components/Header';
import MusicPage from './MusicPage';

const propTypes = {
	on: PropTypes.bool
};

const defaultProps = {
	on: false
}

const Home = styled.main`
	margin-left: 20px;
	background-color: white;
	height: 100vh;
`;

const Page = styled.div`
  background-image: url(https://images.complex.com/complex/image/upload/f_auto,q_auto/complex_edge-v3_lqcs5n.png);
	background-repeat: repeat-y;
	background-size: 40px auto;
`;
const MainPage = styled.div`
	display: flex;
	position: relative;
	padding: 24px;
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
		mounted: false,
		viewNav: false
	}

	_handleScroll = (e) => {
	  this.setState({
	    mounted: true
	  });
	}
	
	componentDidMount() { 
  		window.addEventListener('scroll', this._handleScroll);
	}

	componentWillUnmount(){ 
		window.removeEventListener('scroll', this._handleScroll);
	}

	render() {


		return(
			<Page>
			<Home>
				<Header />
			</Home>
			</Page>
		)
	}
};

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;

export default HomePage;