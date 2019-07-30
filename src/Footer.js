import React from 'react';
import styled from 'styled-components';
import mlogo from './assets/images/mlogo.png';
import { SubHeadline } from './styles.js';

const Div1 = styled.div`{
  width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #8da2a5;
}`
const Div2 = styled.div`{
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}`
const Container = styled.div`{
  color: whitesmoke;
  width: 100%;
  height: 150px;
  background-color: #0e273a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}`
const Img = styled.img`{
  transform: scale(.4);
}`
const FinePrint = styled.div`{
  font-size: .6rem;
  width: 400px;
  text-align: center;
}`;

function Footer() {
  return (
    <Container>
      <Div1>
        <div>
         <Img src={mlogo} />
        </div>
        <div>
        <SubHeadline style={{marginBottom:'5px', marginTop:'5px'}}>Confidentiality Agreement</SubHeadline>
        <FinePrint>McHaney & Associates, Inc., agrees not to release or otherwise divulge any information supplied herein, and that all information given shall be held confidential.</FinePrint>
        </div>
        <div>
        © 2019 | ALL RIGHTS RESERVED
        </div>
      </Div1>
      <Div2>

      </Div2>
    </Container>
  );
}

export default Footer;
