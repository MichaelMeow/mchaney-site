import React from 'react';
import styled from 'styled-components';
import { Text, Title, Title2, SubHeadline, SubTitles, Paragraphs, SubTitle, Paragraph, FlexColumn, ButtonOne } from './styles.js';

const Div = styled.div`{
  background-color: whitesmoke;
  color: #063253;
}`;
const ButtonDiv = styled.div`{
  display: flex;
  justify-content: center;
}`;


function Clients() {
  return (
    <Div>
      <Text>
        <Title>Clients</Title>
        <SubHeadline>McHaney & Associates has served clients all across the United States and Western Europe. We have long term relationships with many of our clients because we continue to add value to their safety process. </SubHeadline>
        </Text>
    </Div>
  );
}

export default Clients;
