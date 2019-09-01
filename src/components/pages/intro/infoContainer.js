import React from 'react';
import styled from 'styled-components';

const InfoContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1000px;
  text-align: left;
  padding: 3em;
  margin: 0 auto;

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

const InfoContainer = () => {
  return ( 
    <InfoContainerDiv>
      <h3>About</h3>
      <p>We are a group of eccentric software engineering enthusiasts.</p>
      <p>We belive in the open source community and love giving back.</p>
      <p>
        We like to help our peers become the bese versions of themselves.
        We belive that project based learning is the best way to move forwards in Software Engineering. For some of us
        this is an easy thing to do. But for most, knowing the right approach always helps.
      </p>
      <p>
        What would be the first thing you do to learn a new technology? Maybe Google it a bit, ask someone you know has experience in it or
        jsut read the documentation. What you are actually doing here is <strong>finding the community</strong>.
      </p>
      <h4>Communtiy is key.</h4>
      <p>
        What we offer is a community of people interested in learing, sharing and growing together. We offer resources and guidelines
        on how you should procee. And all of it is Open Sourced.
      </p>
      <p>And we just happen to build things for fun and profit.</p>
    </InfoContainerDiv>
   );
}
 
export default InfoContainer;