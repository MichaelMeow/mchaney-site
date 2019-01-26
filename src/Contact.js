import React from 'react';
import styled from 'styled-components';
import { Text, Title, SubHeadline, SubTitles, Paragraphs, SubTitle, Paragraph, Title2 } from './styles.js';

const Div = styled.div`{
  background-color: #063253;
  color: white;
}`;

function Contact() {
  return (
    <Div>
      <Text>
        <Title>Contact</Title>
        <Title2>Interested in how McHaney & Associates can help your business?</Title2>
        <SubHeadline>OSHAMedCert is an online Respirator Medical Evaluation which fulfills the requirements of OSHA standard 1910.134(e) and is easy to use.</SubHeadline>
        <SubTitles>
          <div>
            <Title2>Mailing Address:</Title2>
            <div>1234 ardsley run</div>
            <div>spokey wash 33333</div>
          </div>
          <div>
            <Title2>Email:</Title2>
            <div>Ron@mchaney.com</div>
            <Title2>Phone:</Title2>
            <div>555-555-5555</div>
          </div>
        </SubTitles>
        <Title2>Confidentiality Agreement</Title2>
        <div>McHaney & Associates, Inc., agrees not to release or otherwise divulge any information supplied herein, and that all information given shall be held confidential.</div>
      </Text>
    </Div>
  );
}

export default Contact;
