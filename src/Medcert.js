import React from 'react';
import styled from 'styled-components';
import omcPhoto from './assets/images/omcphoto.jpg';
import { Text, Title, SubHeadline, SubTitle, Paragraph, ButtonOneExternal, Page } from './styles.js';

const Div = styled.div`{
  display: flex;
  justify-content: center;
  background-color: white;
}`;
const Img = styled.img`{
  width: 600px;
  height: 100%;
  margin: 10px;
}`;
const SmallText = styled.span`{
  font-size: 12px;
  padding-bottom: 50px;
}`;
const ButtonDiv = styled.div`{
  display: flex;
  justify-content: center;
}`;
const Coupon = styled.div`{
  /* border: dotted red 2px; */
  text-align: center;
  padding: 3px;
}`;
const Stripe = styled.div`{
  border-radius: 5px;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 50px 0px 50px 0px;
  background-color: whitesmoke;
}`;
const DemoFlex = styled.div`{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 600px;
}`;


function Medcert() {
  return (
    <div>
    <Div>
      <Page>
      <Text>
        <Title>OSHA<span style={{fontStyle:'italic'}}>Med</span>Cert<sup style={{fontSize:".5rem"}}>TM</sup></Title>
        <SubHeadline style={{fontSize:"1.5rem", width:"80%"}}>OSHA<span style={{fontStyle:'italic'}}>Med</span>Cert<sup style={{fontSize:".5rem"}}>TM</sup> is an online Respirator Medical Evaluation, Certification and
          Tracking System that is easy to use. It fulfills the requirements of OSHA standard
          1910.134(e).</SubHeadline>
        <SubTitle>Fast</SubTitle>
        <Paragraph>Employees receive a clearance certificate to wear a respirator in about 10 minutes.</Paragraph>
        <SubTitle>Convenient</SubTitle>
        <Paragraph>Workers can be evaluated on-site and administrators have real time access to
results.
        <p>
          Company Administrators have real-time access to:
        </p>
        <ul>
          <li>Who took the online evaluation to wear a respirator</li>
          <li>Date of the online evaluation to wear a respirator</li>
          <li>Employees' online evaluation status (Approved or Denied)</li>
          <li>History of results maintained in the records archive</li>
          </ul>
        </Paragraph>
        <SubTitle>Cost Effective</SubTitle>
        <Paragraph>$25 per evaluation ordered. Cost savings of $100 to $350 per Online Medical
Evaluation have been reported.</Paragraph>
        <SubTitle>Reliable</SubTitle>
        <Paragraph>Board-certified physicians have reviewed evaluation questions and issue clearance certificates to wear a respirator and our Certified Safety Proffessionals provide expert oversight.
        </Paragraph>
        </Text>

        <Div>
        <Img src={omcPhoto} alt='employees who have taken online respirator evaluation and certified by OSHA MedCert to wear respirators'/>
        </Div>
        <Div>
        <SmallText>Workers Certified by OSHA MedCert to wear Respirators</SmallText>
        </Div>

          <Stripe>
            <DemoFlex>
            <div style={{paddingRight:"100px"}}>
            <h4>
            The cost per online medical evaluation to wear a respirator is $25.
            </h4>
            <h4>
            Demo at no cost:
            </h4>
            <Coupon>Access code - D1029</Coupon>
            </div>
      <ButtonDiv>
        <ButtonOneExternal href="http://www.oshamedcert.com/" style={{marginBottom:"0px"}}>Go To OSHA<span style={{fontStyle:'italic'}}>Med</span>Cert.com</ButtonOneExternal>
      </ButtonDiv>
      </DemoFlex>
      </Stripe>

      <Paragraph>
      <h6>* Online Medical Evaluations to wear a respirator are available in Spanish.</h6>
      <h6>
      OSHA<span style={{fontStyle:'italic'}}>Med</span>Cert <span style={{fontSize:".5rem"}}>TM</span> is owned and operated by McHaney & Associates:
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
      <a href='' style={{color:'#063253'}}>
      oshamedcert@gmail.com
      </a>
      </div>
      </h6>
      </Paragraph>
      </Page>
      </Div>
      </div>
  );
}

export default Medcert;
