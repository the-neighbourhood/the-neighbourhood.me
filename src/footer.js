import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';



const Footer = () =>
  <FooterContainer>
    <WhiteLink to="/">The Neighborhood</WhiteLink>
    <WhiteLink to="/members">Members</WhiteLink>
    <NavButton to="#">Facebook</NavButton>
    <NavButton to="#">Discord</NavButton>
  </FooterContainer>

export default Footer;