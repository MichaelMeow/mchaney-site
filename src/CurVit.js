import React from 'react';
import styled from 'styled-components';
import ronPhoto from './assets/images/RonPhoto.jpg';
import { Text, Title, SubHeadline, SubTitles, Paragraphs, SubTitle, Paragraph, FlexColumn, ButtonTwo, Title2 } from './styles.js';

const Container = styled.div`{
  display: flex;
  background-color: #8da2a5;
  align-items: center;
  justify-content: space-around;
  padding-left: 15vw;
  padding-right: 15vw;
  color: #063253;
}`;
const ButtonDiv = styled.div`{
  display: flex;
  justify-content: center;
}`;


function CurVit() {
  return (
    <Container>
      <div>
        <ButtonDiv>
          <ButtonTwo to="/">
            Download PDF
          </ButtonTwo>
        </ButtonDiv>
        <Text>
          <Title>Mr. Ron McHaney</Title>
          <Title2>President, McHaney and Associates</Title2>
          <SubHeadline>Certified Safety Professional (#12482) with experience at corporate, division and facility levels in primary metals, fabricated metals, mining, industrial chemicals, refractory, automobile assembly, shipbuilding as well as retail and warehouse operations.</SubHeadline>
          Insert CV here.
        </Text>
      </div>
      <div>
        <img src={ronPhoto} />
      </div>
    </Container>
  );
}

export default CurVit;
