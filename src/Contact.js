import React from 'react';
import styled from 'styled-components';
import { Text, Title, SubHeadline, SubTitles, Paragraphs, SubTitle, Paragraph, Title2 } from './styles.js';

const Div = styled.div`{
  background-color: #063253;
  color: white;
}`;
const FinePrint = styled.div`{
  font-size: .6rem;
}`;

function Contact() {
  return (
    <Div>
      <Text>
        <Title>Contact</Title>
        <div>Interested in how McHaney & Associates can help your business?</div>
        <SubTitles>
          <div>
            <Title2 style={{marginBottom:'5px', marginTop:'5px'}}>Mailing Address:</Title2>
            <div>1234 ardsley run</div>
            <div>spokey wash 33333</div>
          </div>
          <div>
            <Title2 style={{marginBottom:'5px', marginTop:'5px'}}>Email:</Title2>
            <div>Ron@mchaney.com</div>
            <Title2 style={{marginBottom:'5px', marginTop:'10px'}}>Phone:</Title2>
            <div>555-555-5555</div>
          </div>
        </SubTitles>
        <SubHeadline style={{marginBottom:'5px', marginTop:'5px'}}>Confidentiality Agreement</SubHeadline>
        <FinePrint>McHaney & Associates, Inc., agrees not to release or otherwise divulge any information supplied herein, and that all information given shall be held confidential.</FinePrint>
      </Text>
    </Div>
  );
}

export default Contact;
