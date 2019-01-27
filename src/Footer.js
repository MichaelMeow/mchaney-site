import React from 'react';
import styled from 'styled-components';
import mlogo from './assets/images/mlogo.png';

const Div1 = styled.div`{
  width: 600px;
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
}`
const Img = styled.img`{
  transform: scale(.4);
}`


function Footer() {
  return (
    <Container>
      <Div1>
        <div>
         <Img src={mlogo} />
        </div>
        <div>
        PRIVACY
        </div>
        <div>
        TERMS
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
