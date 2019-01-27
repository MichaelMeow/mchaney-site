import React from 'react';
import styled from 'styled-components';
import { Text, Title, SubHeadline, SubTitles, Paragraphs, SubTitle, Paragraph, FlexColumn, ButtonOne, Title2 } from './styles.js';

const Div = styled.div`{
  background-color: smoke;
  display: flex;
  align-items: center;
  color: #063253;
}`;
const Flex = styled.div`{
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}`;
const ButtonDiv = styled.div`{
  display: flex;
  justify-content: center;
}`;


function WitnessBlurb() {
  return (
    <Div>
      <Text>
        <Title>Expert Witness</Title>
        <Title2>Litigation Support for OSHA and MSHA Health and Safety Issues</Title2>
        <Flex>
          <div>
            <SubHeadline>Ron McHaney is a Certified Safety Professional with more than 50 years of occupational health and safety experience including expert witness assignments since 1998.</SubHeadline>
            <SubHeadline>Mr. McHaney is knowledgeable in both OSHA and MSHA health and safety regulations and has served as an expert witness for both OSHA and MSHA cases and has testified in state and federal court settings, as well as, the Occupational Safety and Health Review Commission.</SubHeadline>
          </div>
          <ButtonDiv style={{paddingLeft:'30px'}}>
            <ButtonOne to="/witness">Learn More</ButtonOne>
          </ButtonDiv>
        </Flex>
      </Text>
    </Div>
  );
}

export default WitnessBlurb;
