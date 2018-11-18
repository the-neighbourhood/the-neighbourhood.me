import React from 'react';
import styled from 'styled-components';

// Import Page Components
import InfoContainer from './components/pages/intro/infoContainer';
import HeroContainer from './components/pages/intro/heroContainer';
import ContactContainer from './components/pages/intro/contactContainer';

const IntroContainer = styled.div`
  text-align: center;
`;

const Intro = () =>
  <IntroContainer>
    <HeroContainer />
    <InfoContainer />
    <ContactContainer />
  </IntroContainer>

export default Intro;