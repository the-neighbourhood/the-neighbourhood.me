import React from 'react';
import styled from 'styled-components';

import Nav from './nav';
import Footer from './footer';

const LayoutContainer = styled.div`
  background-color: #282828;
  color: white;
  font-family: 'Montserrat', sans-serif;
`;

const ChildrenWrapper = styled.div`
  min-height: calc(100vh - 8.2em);
`;

const Layout = ({ children }) =>
  <LayoutContainer>
    <Nav />
    <ChildrenWrapper>
      { children }
    </ChildrenWrapper>
    <Footer />
  </LayoutContainer>

export default Layout;