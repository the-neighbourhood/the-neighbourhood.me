import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  background: black;
  color: white;
  padding: 1em 2em;
  justify-content: flex-end;
  align-items: center;
`;

const WhiteLink = styled(Link)`
  color: white;
  padding: 0 1em;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #f1c40f;
  }

`;

const NavButton = styled.button`
  color: white;
  padding: .3rem 1rem;
  text-decoration: none;
  font-weight: bold;
  background: none;
  border: none;
  border: 1px solid #f1c40f;
  margin-right: 1rem;
  border-radius: .2rem;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    color: #f1c40f;
    border: 1px solid #fff;
  }

  &:focus {
    outline: none;
  }

`;

const Nav = () =>
  <NavContainer>
    <WhiteLink to="/">The Neighborhood</WhiteLink>
    <WhiteLink to="/members">Members</WhiteLink>
    <NavButton to="#">Facebook</NavButton>
    <NavButton to="#">Discord</NavButton>
  </NavContainer>

export default Nav;