import React from 'react';
import styled from 'styled-components';
import { Text, Title, SubHeadline, ButtonOne } from './styles.js';

const Div = styled.div`{
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
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
export const H3 = styled.h3`{
  font-family: 'Libre Baskerville', serif;
  font-weight: 700;
  width: 400px;
}`;

function WitnessBlurb() {
  return (
    <Div>
      <Text>
        <Title>Expert Witness</Title>
        <H3>Litigation Support for OSHA and MSHA Health and Safety Issues</H3>
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
