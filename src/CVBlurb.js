import React from 'react';
import styled from 'styled-components';
import ronPhoto from './assets/images/RonPhoto.jpg';
import { Text, Title, SubHeadline, ButtonTwo, Title2 } from './styles.js';

const Container = styled.div`{
  display: flex;
  background-color: #8da2a5;
  align-items: center;
  justify-content: center;
  /* padding-left: 15vw;
  padding-right: 15vw; */
  color: #063253;
}`;
const ButtonDiv = styled.div`{
  display: flex;
  justify-content: center;
}`;
export const Img = styled.img`{
  padding: 100px 100px 100px 0px;
  margin-top: 0px;
}`;


function CVBlurb() {
  return (
    <Container>
      <div>
        <Text>
          <Title>Mr. Ron McHaney</Title>
          <Title2>President, McHaney and Associates</Title2>
          <SubHeadline>Certified Safety Professional (#12482) with experience at corporate, division and facility levels in primary metals, fabricated metals, mining, industrial chemicals, refractory, automobile assembly, shipbuilding as well as retail and warehouse operations.</SubHeadline>
          <ButtonDiv>
          <ButtonTwo to="/cv" style={{margin:'30px'}}>Get Full Curriculum Vitae</ButtonTwo>
          </ButtonDiv>
        </Text>
      </div>
      <div>
        <Img src={ronPhoto} alt='Ron Mchaney Certified Safety Professional profile with experience in primary metals, fabricated metals, mining, industrial chemicals, refractory, automobile assembly, shipbuilding as well as retail and warehouse operations' />
      </div>
    </Container>
  );
}

export default CVBlurb;
