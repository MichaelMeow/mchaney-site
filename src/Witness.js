import React from 'react';
import styled from 'styled-components';
import { Text, Title, SubHeadline, SubTitles, Paragraphs, SubTitle, Paragraph, FlexColumn, Title2, Page } from './styles.js';

const Div = styled.div`{
  background-color: smoke;
  display: flex;
  align-items: center;
  color: #063253;
  justify-content: center;
}`;


function Witness() {
  return (
    <Div>
      <Page>
        <Text>
        <Title>Expert Witness</Title>
        <Title2>Litigation Support for OSHA and MSHA Health and Safety Issues</Title2>
        Ron McHaney is a Certified Safety Professional with more than 40 years of occupational health and safety experience including expert witness assignments since 1998.
          <ul>
            <li>
            Mr. McHaney is knowledgeable in both OSHA and MSHA health and safety regulations and has served as an expert witness for both OSHA and MSHA cases.
            </li>
            <li>
            Mr. McHaney is known for his depth of research and skilled presentation of facts and expert witness opinions relative to OSHA and MSHA regulations.
            </li>
            <li>
            He has given expert witness depositions for OSHA and MSHA cases and has testified in state and federal court settings, as well as, the Occupational Safety and Health Review Commission.
            </li>
            <li>
            Mr. McHaney accepts expert witness assignments for the plaintiff as well as the defense. He is available for consultation regarding the merits of an OSHA or MSHA case or litigation support for OSHA and MSHA issues.
            </li>
          </ul>
          In addition to OSHA and MSHA issues, Mr. McHaney has more than 30 years experience in the aluminum industry. This experience includes:
          <ul>
            <li>
              Aluminum Smelting
            </li>
            <li>
              Aluminum Fabrication
            </li>
            <li>
              Aluminum Extrusion
            </li>
            <li>
              Aluminum Forging
            </li>
            <li>
              Aluminum Rod-Bar and Wire
            </li>
            <li>
              Aluminum Casting
            </li>
            <li>
              Aluminum Foundries
            </li>
          </ul>
          Prior to founding McHaney & Associates, Mr. McHaney was the Senior Corporate Safety Consultant for Kaiser Aluminum. In this capacity, Mr. McHaney provided consulting services for Kaiser Aluminum worldwide.
          <h5>
            References and expert witness deposition history are available upon request.
          </h5>
        </Text>
      </Page>
    </Div>
  );
}

export default Witness;
