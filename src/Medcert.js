import React from 'react';
import styled from 'styled-components';
import { Text, Title, SubHeadline, SubTitles, Paragraphs, SubTitle, Paragraph, FlexColumn, ButtonOneExternal, Page } from './styles.js';

const Div = styled.div`{
  display: flex;
  justify-content: center;
}`;

const Box = styled.div`{
  width: 200px;
  height: 250px;
  border: 2px solid whitesmoke;
  border-radius: 5px;
  margin: 20px;
  display: flex;
  padding: 15px;
  justify-content: center;
  align-items: center;
}`;
const Boxes = styled.div`{
  display: flex;
  justify-content: center;
  width: 100%;
}`;
const ButtonDiv = styled.div`{
  display: flex;
  justify-content: center;
}`;


function Medcert() {
  return (
    <Div>
      <Page>
      <Text>
        <Title>OSHA<span style={{fontStyle:'italic'}}>Med</span>Cert <span style={{fontSize:".5rem"}}>TM</span></Title>
        <SubHeadline>OSHA<span style={{fontStyle:'italic'}}>Med</span>Cert <span style={{fontSize:".5rem"}}>TM</span> is an online Respirator Medical Evaluation which fulfills the requirements of OSHA standard 1910.134(e) and is easy to use.*</SubHeadline>
        <SubTitle>Fast</SubTitle>
        <Paragraph>Employees complete the confidential online medical evaluation and receive a
         clearance certificate to wear a respirator in about 10 minutes.</Paragraph>
        <SubTitle>Convenient</SubTitle>
        <Paragraph>This online respirator medical evaluation process allows for certification to wear a respirator at any hour of the day or night.  Employees may be evaluated on any shift without needing to leave the work site to comply with OSHA regulation.
        Company Administrators have real-time access to:
        <ul>
          <li>Who took the online evaluation to wear a respirator</li>
          <li>Date of the online evaluation to wear a respirator</li>
          <li>Employees' online evaluation status (Approved or Denied)</li>
          <li>History of results maintained in the records archive</li>
          </ul>
        </Paragraph>
        <SubTitle>Cost Effective</SubTitle>
        <Paragraph>There is no need to pay wages for travel and waiting time costs. Cost savings of $100 to
         $350 per Online Medical Evaluation have been reported.</Paragraph>
        <SubTitle>Reliable</SubTitle>
        <Paragraph>Board-certified physicians have reviewed evaluation questions and issue clearance certificates to wear a respirator and our Certified Safety Proffessionals provide expert oversight.
          <h5>
          OSHA<span style={{fontStyle:'italic'}}>Med</span>Cert <span style={{fontSize:".5rem"}}>TM</span> is owned and operated by McHaney & Associates.
          </h5>
          <h5>* Online Medical Evaluations to wear a respirator are available in Spanish.</h5>
          <h5>
          The cost per online medical evaluation to wear a respirator is $25.
          </h5>
        </Paragraph>
        <Boxes>
          <Box>
          <div>
            <h4>
            Demo at no cost:
            </h4>
              <h4>
              <a href="http://www.oshamedcert.com">www.oshamedcert.com</a>
              </h4>
            Access code - D1029
            </div>
          </Box>
          <Box>
            <div>
            Ron McHaney
            <div>OSHA<span style={{fontStyle:'italic'}}>Med</span>Cert</div>
            <div>
            8924 E. Red Oak Drive
            </div>
            <div>
            Spokane, Washington 99217
            </div>
            <div>
            509-315-8658 (office)
            </div>
            <div>
            503-313-1879 (mobile)
            </div>
            <a href=''>
            oshamedcert@gmail.com
            </a>
            </div>
          </Box>
        </Boxes>
      </Text>
      <ButtonDiv>
        <ButtonOneExternal href="http://www.oshamedcert.com/">Go To OSHA<span style={{fontStyle:'italic'}}>Med</span>Cert.com</ButtonOneExternal>
      </ButtonDiv>
      </Page>
    </Div>
  );
}

export default Medcert;
