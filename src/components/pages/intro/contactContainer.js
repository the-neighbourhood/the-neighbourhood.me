import React from 'react';
import styled from 'styled-components';

const ContactUsDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem;
  flex-direction: column;

  h2 {
    font-size: 38px;
    margin-bottom: 2rem;
  }
`;

const ContactUsForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  background: none;
  border: none;
`;

const ContactUsInput = styled(Input)`
  width: 30%;
  margin: 1rem 0;
  padding: .8rem;
  border: 1px solid #f1c40f;
  border-radius: 5px;
  color: #eee;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;

  &::placeholder {
    margin-left: 1rem;
    color: #eee;
  }

  &:focus {
    outline: none;
  }
`;

const ContactUsTextarea = styled.textarea`
  border: none;
  background: none;
  border: 1px solid #f1c40f;
  resize: none;
  width: 30%;
  margin: 1rem 0;
  padding: .8rem;
  border: 1px solid #f1c40f;
  border-radius: 5px;
  color: #eee;
  font-size: 18px;
  min-height: 200px;
  font-family: 'Montserrat', sans-serif;

  &::placeholder {
    margin-left: 1rem;
    color: #eee;
  }

  &:focus {
    outline: none;
  }

`;

const SubmitButton = styled.button`
  background: none;
  border: none;
  padding: .8rem 1.5rem;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #0008B2;
  font-family: 'Montserrat', sans-serif;
  margin-top: 1rem;
  border-radius: 5px;
  cursor: pointer;
  color: #eee;
  transition: .3s all;

  &:hover {
    color: #0008B2;
    background-color: #eee;

  }
`;


const ContactContainer = () => {
  return ( 
    <ContactUsDiv>
      <h2>Contact Us!</h2>
      <ContactUsForm>
        <ContactUsInput type="text" name="name" placeholder="Enter your full"/>
        <ContactUsInput type="email" name="email" placeholder="Enter your Email"/>
        <ContactUsTextarea type="text" name="description" placeholder="Enter description"/>
        <SubmitButton>Submit!</SubmitButton>
      </ContactUsForm>
    </ContactUsDiv>
   );
}
 
export default ContactContainer;