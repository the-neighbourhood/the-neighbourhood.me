import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  background: black;
  color: white;
  padding: 1em 2em;
  justify-content: space-around;
  align-items: center;
`;

const Copyright = styled.p`
  color: #fff;
  font-family: 'Montserrat', sans-serif;
`;



const Footer = () =>
  <FooterContainer>
    <Copyright>All rights reserved to &copy;The Neighbourhood</Copyright>
    <Copyright>2018</Copyright>
  </FooterContainer>

export default Footer;