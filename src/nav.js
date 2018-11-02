import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import media from './media';

const NavContainer = styled.div`
  display: flex;
  background: black;
  color: white;
  padding: 1em 2em;
  justify-content: space-between;
  align-items: center;
  min-height: 5rem;
  flex-wrap: wrap;
`;

const WhiteLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    color: #f1c40f;
  }

`;

const ExternalLink = styled.a`
  color: white;
  padding: .3rem 1rem;
  text-decoration: none;
  font-weight: bold;
  background: none;
  border: none;
  border: 1px solid #f1c40f;
  border-radius: .2rem;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  transition: all .3s;
  margin: .5rem;

  &:hover {
    color: #f1c40f;
    border: 1px solid #fff;
  }

  &:focus {
    outline: none;
  }

`;

const MobileMenuIcon = styled.a`
  font-size: 2rem;
  ${media.tablet`
    display: none;
  `}
`;

const RightMenu = styled.div`
  & a:not(.mobile-visible) {
    display: none;
  }

  ${media.tablet`
    display: block; 
  `}
`;

const MobileMenu = styled.div`
  width: 100vw;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
`;

const MenuElements = [
  <WhiteLink to="/" onClick={ e => window.scrollTo(0, 1000)}>about</WhiteLink>,
  <ExternalLink href="https://goo.gl/forms/7s9jjFTki3vELnU52" >Join Us</ExternalLink>
];

class Nav extends Component {
  state = {
    toggle: false,
  }

  toggleNav = () => {
    this.setState((state, props) => ({ toggle: !state.toggle }));
  }

  render() {
    return  <NavContainer>
      <div>
        <WhiteLink to="/">The Neighborhood</WhiteLink>
      </div>
      <RightMenu>
        {
          MenuElements
        }
        <MobileMenuIcon className="mobile-visible" onClick={this.toggleNav}>&#9776;</MobileMenuIcon>
      </RightMenu>
      <MobileMenu show={this.state.toggle}>
        {
          MenuElements
        }
      </MobileMenu>
    </NavContainer>;
  }
}
 

export default Nav;