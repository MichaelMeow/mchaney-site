import React from 'react';
import styled from 'styled-components';
import { Text, Title, Title2, SubHeadline, SubTitles, Paragraphs, SubTitle, Paragraph, FlexColumn, ButtonOne } from './styles.js';
import Clients from './Clients'

const Div = styled.div`{
  background-color: white;
  color: #063253;
}`;
const ButtonDiv = styled.div`{
  display: flex;
  justify-content: center;
}`;
const Fix = styled.div`{
  width: 100%;
}`;


function WhyUs() {
  return (
    <div>
      <Div>
        <Text>
          <Title>Why Us?</Title>
          <Title2>Safety-consulting and Training Content Development</Title2>
          <SubHeadline>McHaney & Assoociates is a safety-consulting and training content development corporation. Founded in 1998 by Ronald R. McHaney, CSP.  McHaney & Associates is experienced in both MSHA and OSHA regulations and requirements.</SubHeadline>
          <Paragraphs>
            <Fix>
              <FlexColumn>
                <SubTitle>Training</SubTitle>
                <Paragraph>Developing customized training content utilizing adult learning techniques.
                Completed projects include:
                Training content for 9 separate OSHA Susan Harwood Training Grants
                Training content for a SHIP Grant. (Safety & Health Investment Project Grant Program, Washington state Department of Labor & Industries) </Paragraph>
              </FlexColumn>
            </Fix>
            <Fix>
              <FlexColumn>
                <SubTitle>Expert Witness</SubTitle>
                <Paragraph>Providing expert witness services and testimony for issues in litigation.</Paragraph>
              </FlexColumn>
            </Fix>
            <Fix>
              <FlexColumn>
                <SubTitle>OSHA MedCert</SubTitle>
                <Paragraph>Providing online medical evaluations for respirator users across the nation.
                McHaney & Associates is the parent company or Osha MedCert (www.oshamedcert.com). Osha MedCert has been providing online medical evaluations for respirator users for more than 15 years. </Paragraph>
              </FlexColumn>
            </Fix>
          </Paragraphs>
        </Text>
      </Div>
      <Clients />
    </div>
  );
}

export default WhyUs;
