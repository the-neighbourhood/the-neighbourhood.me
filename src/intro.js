import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import groupLogo from './group_logo.png';

const IntroContainer = styled.div`
  text-align: center;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: calc(100vh - 5rem);
  background-repeat: no-repeat;
  background-color: #282828;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #fff;
  margin-top: 4rem;
`;

const SubTitle = styled.p`
  font-size: 2rem;
  padding: 1em 0;
`;

const ActionButton = styled(Link)`
  font-size: 1.5rem;
  background: maroon;
  padding: .5em 1em;
  color: white;
  border: none;
  text-decoration: none;
`;

const SubActionLink = styled(Link)`
  color: #f1c40f;
  display: block;
  margin: 1em;
`;

const HeroGroup = styled.div`
  align-items: center;
  justify-content: center;
`;

const HeroLogo = styled.img``;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 3em;
  min-height: 100vh;
  text-align: left;

  h3, h4 {
    padding: 2em 0;
  }

  p {
    padding: 1em 0;
  }

  h3 {
    text-decoration: underline;
  }

  h4 {
    text-align: center;
  }
`;

const Intro = () =>
  <IntroContainer>

    <HeroContainer>
      <HeroGroup>
        <Title>The Neighbourhood</Title>
        <SubTitle>Grow together in Open Source</SubTitle>
      </HeroGroup>
      <HeroLogo src={groupLogo} alt="group_log"/>
      <HeroGroup>
        <ActionButton to="/projects">see what we do</ActionButton>
        <SubActionLink to="/members">see who we are</SubActionLink>
      </HeroGroup>
    </HeroContainer>
    
    <InfoContainer>
      <h3>About</h3>
      <p>We are a group of individuals who have embarked on a journey to master the cutting edge of software engineering.</p>
      <p>
        We belive that project based learning is the best way to move forwards in Software Engineering. For some of us
        this is an easy thing to do. But for most, knowing the right approach always helps.
      </p>
      <p>
        What would be the first thing you do to learn a new technology? Maybe Google it a bit, ask someone you know has experience or
        jsut read the documentation. What you are actually doing here is <strong>finding the community</strong>.
      </p>
      <h4>Communtiy is key.</h4>
      <p>
        What we offer is a community of people interested in learing, sharing and growing together. We offer resources and guidelines
        on how you should procee. And all of it is Open Sourced.
      </p>
      <p>
        We are a big beliver in the Open Source movement. All of our projects use and promote Open Source technology. And of course the
        project themselves are Open Source.
      </p>
      <p>
        Come join us and be part of a wonderful community of software enthusiasts.
      </p>
    </InfoContainer>

  </IntroContainer>

export default Intro;