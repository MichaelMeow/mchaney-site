import React from 'react';
import styled from 'styled-components';
import { Title, Title2 } from './styles.js';

const Div = styled.div`{
  background-color: #063253;
  color: white;
  display: flex;
  justify-content: center;
}`;
const ContactCard = styled.div`{
  padding: 140px 100px 100px 100px;
  margin-top: 0px;
  width: 440px;
}`;
export const ContactSubTitles = styled.div`{
  margin: 25px 0px 0px 0px;
  display: flex;
  justify-content: space-between;
}`;

function Contact() {
  return (
    <Div>
      <ContactCard>
        <Title>Contact</Title>
        <div>Interested in how McHaney & Associates can help your business?</div>
        <ContactSubTitles>
          <div>
            <Title2 style={{marginBottom:'5px', marginTop:'5px'}}>Email:</Title2>
            <div>info@mchaneysafety.com</div>
            <Title2 style={{marginBottom:'5px', marginTop:'10px'}}>Phone:</Title2>
            <div>509-315-8658 (Office)</div>
            <div>503-313-1879 (Mobile)</div>
          </div>
          <div>
            <Title2 style={{marginBottom:'5px', marginTop:'5px'}}>Mailing Address:</Title2>
            <div>8924 E. Red Oak Dr.</div>
            <div>Spokane, WA 99217</div>
          </div>
        </ContactSubTitles>
      </ContactCard>
    </Div>
  );
}

export default Contact;
