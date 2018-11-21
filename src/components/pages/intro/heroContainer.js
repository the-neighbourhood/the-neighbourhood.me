import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import media from '../../../media'
import groupLogo from '../../../group_logo.png';

const HeroContainerDiv = styled.div`
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
  font-size: 2rem;
  color: #fff;
  margin-top: 1rem;

  ${media.tablet`
    font-size: 4rem;
  `}
`;

const SubTitle = styled.p`
  font-size: 1rem;
  padding: 1em 0;

  ${media.tablet`
    font-size: 2rem;
  `}
`;

const ActionButton = styled(Link)`
  font-size: 1.5rem;
  background: #0008B2;
  border-radius: 5px;
  padding: .8rem 1.5rem;
  color: #eee;
  border: none;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    color: #0008B2;
    background-color: #eee;
  }
`;

const SubActionLink = styled(Link)`
  color: #f1c40f;
  display: block;
  margin: 2em;
  text-decoration: none;
  border: 1px solid #f1c40f;
  font-family: 'Montserrat', sans-serif;
  padding: .8rem 1.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  transition: .3s all;

  &:hover {
    border: 1px solid #eee;
    color: #eee;
  }

`;

const HeroGroup = styled.div`
  align-items: center;
  justify-content: center;
`;

const HeroLogo = styled.img`
  max-width: 100vw;
  margin: 1.5em 0;
`;

const HeroContainer = () => {
  return (
    <HeroContainerDiv>
      <HeroGroup>
        <Title>The Neighbourhood</Title>
        <SubTitle>Grow together in Open Source</SubTitle>
      </HeroGroup>
      <HeroLogo src={groupLogo} alt="group_log"/>
      <HeroGroup>
        <ActionButton to="/projects">see what we do</ActionButton>
        <SubActionLink to="/members">see who we are</SubActionLink>
      </HeroGroup>
    </HeroContainerDiv>
   );
}
 
export default HeroContainer;