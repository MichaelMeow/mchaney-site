import React from 'react';
import styled from 'styled-components';
import { Text, Title, SubHeadline, SubTitles, Paragraphs, SubTitle, Paragraph, FlexColumn, ButtonOneExternal } from './styles.js';

const Div = styled.div`{
  background-color: whitesmoke;
  color: #063253;
}`;
const ButtonDiv = styled.div`{
  display: flex;
  justify-content: center;
}`;


function MedcertBlurb() {
  return (
    <Div>
      <Text>
        <Title>OSHA MedCert</Title>
        <SubHeadline>OSHAMedCert is an online Respirator Medical Evaluation which fulfills the requirements of OSHA standard 1910.134(e) and is easy to use.</SubHeadline>
        <Paragraphs>
          <FlexColumn>
            <SubTitle>Fast</SubTitle>
            <Paragraph>Employees receive a clearance certificate to wear a respirator in about 10 minutes.</Paragraph>
          </FlexColumn>
          <FlexColumn>
            <SubTitle>Convenient</SubTitle>
            <Paragraph>Workers can be evaluated on-site
              and administrators have
              real time access to results.</Paragraph>
          </FlexColumn>
          <FlexColumn>
            <SubTitle>Cost Effective</SubTitle>
            <Paragraph>$25 per evaluation ordered. Cost savings of $100 to $350 per Online Medical Evaluation have been reported.</Paragraph>
          </FlexColumn>
        </Paragraphs>
      </Text>
      <ButtonDiv>
        <ButtonOneExternal href="http://www.oshamedcert.com/">Go To OSHA MedCert</ButtonOneExternal>
      </ButtonDiv>
    </Div>
  );
}

export default MedcertBlurb;
