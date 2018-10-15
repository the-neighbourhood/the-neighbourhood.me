import React from 'react';
import styled from 'styled-components';

import kanpai from './kanpai.png';

const IntroContainer = styled.div`
  /* padding: 1em 4em; */
  text-align: center;
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-image: url(${kanpai});
  height: calc(100vh - 5rem);
  background-repeat: no-repeat;
  background-color: #282828;
  width: 100%;
  background-position: 50% 60%;
`;

const Header = styled.h1`
  font-size: 5rem;
  color: #fff;
  margin-top: 4rem;
`;

// const Logo = styled.img`
//   width: 100%;
//   height: 80vh;
// `;

const ActionButton = styled.button`
  font-size: 1.5rem;
  background: maroon;
  padding: .5em 1em;
  color: white;
  border: none;
`;

const SubActionLink = styled.a`
  color: #f1c40f;
  display: block;
  margin: 1em;
  text-decoration: underline;
`;

const ObjectivesList = styled.ul`
  li {
    list-style: none;
  }
`;

const Intro = () =>
  <IntroContainer>

    <CenteredContainer>
      <Header>The Neighbourhood</Header>
      {/* <Logo src={kanpai} alt="logo" /> */}
    </CenteredContainer>

    <p>We are a group of individuals who have embarked on a journey to master the cutting edge of software engineering</p>

    <ActionButton>
      See Who We Are
    </ActionButton>

    <SubActionLink>See What We Do</SubActionLink>

    <h2>Current Objective/Goals/Projects</h2>
    <ObjectivesList>
      <li>Gathering members with either ambition or dispair</li>
      <li>Long terms golas of learning and working with Data Science, Blockchain, Internet of Things and Music (edm, sysnthesis, ai music)</li>
      <li>Starting with learning Python then JavaScript with aim of learning to become a language agnostic/polyglot</li>
      <li>Learn DataStructes and Algorithms together</li>
      <li>Project: Group website</li>
      <li>Project: Data Science blog</li>
      <li>Project: Blockchain trading bot and decentralized exchange</li>
      <li>Project: Learning platform like freecodecamp</li>
      <li>Project: The Neighborhood podcast</li>
      <li>Goal: Monetize anything we build/write</li>
      <li>Goal: A common portfolio site with eye catching achievements</li>
      <li>Goal: Getting funded</li>
      <li>Goal:  Building co-working space/Fab lab/ lab/ studio</li>
    </ObjectivesList>
  </IntroContainer>

export default Intro;