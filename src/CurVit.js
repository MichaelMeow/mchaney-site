import React from 'react';
import styled from 'styled-components';
import ronPhoto from './assets/images/RonPhoto.jpg';
import { Text, Title, SubHeadline, SubTitles, Paragraphs, SubTitle, Paragraph, FlexColumn, ButtonTwo, Title2 } from './styles.js';

const Container = styled.div`{
  padding-top: 160px;
  display: flex;
  background-color: whitesmoke;
  justify-content: space-around;
  padding-left: 15vw;
  padding-right: 15vw;
  color: #063253;
  padding-bottom: 100px;
}`;
const ButtonDiv = styled.div`{
  display: flex;
  justify-content: center;
}`;
const Employment = styled.div`{
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}`;
const Year = styled.div`{
  width: 100px;
  font-style: italic;
}`;
const Job = styled.div`{
  flex:1;
}`;
const UnderLine = styled.span`{
  text-decoration: underline;
}`;
const Img = styled.img`{
  padding-left: 15px;
}`;
const A = styled.a`{
  text-decoration: none;
  color: white;
  margin-bottom: 100px;
  height: 60px;
  width: 220px;
  background-color: #8da2a5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  box-shadow: 4px 4px 10px 1px black;
  margin: 40px;
}`;


function CurVit() {
  return (
    <Container>
      <div>
          <Title>Mr. Ron McHaney</Title>
          <Title2>President, McHaney and Associates</Title2>
          <h4>QUALIFICATIONS</h4>
          <p>
            Certified Safety Professional (#12482) with experience at corporate, division and
            facility levels in primary metals, fabricated metals, mining, industrial chemicals,
            refractory, automobile assembly, shipbuilding as well as retail and warehouse
            operations.
          </p>
          <p>
            Expertise in occupational safety, industrial hygiene, security, fire protection,
            Workers’ Compensation, environmental affairs and health services.
          </p>
          <p>
            Highly developed skills and significant record of accomplishment in the management
            of risks to people and property.
          </p>
          <h4>EDUCATION</h4>
          <p> BS, Industrial Security, Michigan State University, 1964.</p>
          <h4>EMPLOYMENT</h4>
          <Employment>
            <Year>1998-Present</Year>
            <Job>
              <div style={{fontStyle:'italic'}}>
              President, McHaney & Associates, Inc., Canton, GA</div>
              Safety, health and loss prevention consulting for clients throughout North America,
              with the emphasis on working with clients to increase the value of the Health and
              Safety Program within the overall structure of the company. Although McHaney &
              Associates is capable of providing a wide range of loss control services, our major
              areas of specialization are employee training, safety program auditing, and expert
              witness services.
            </Job>
          </Employment>
          <Employment>
            <Year>1997-1998</Year>
            <Job>
              <div style={{fontStyle:'italic'}}>
              Corporate Senior Safety Consultant, Kaiser Aluminum</div>
              Provided safety consulting services for all facilities within the Kaiser organization
              (North America, Europe and Africa). Developed and conducted safety training
              workshops for field safety personnel and line managers. Was a permanent member of
              the Corporate Executive Safety Council and the Corporate Safety Audit Team.
              Developed Corporate Safety and Health Standards and corresponding Audit Criteria.
              Chaired the Aluminum Association’s Special Task Force for Special Hazards
              Clothing. Co-authored the Kaiser Aluminum Safety and Health Leadership Process
              Matrix and its measurement system.
            </Job>
          </Employment>
          <Employment>
            <Year>1994-1997</Year>
            <Job>
              <div style={{fontStyle:'italic'}}>
              Safety & Health Manager, Primary Aluminum Business Unit, Kaiser Aluminum</div>
              Provided safety and health staff services to the President, Primary Aluminum
              Business Unit and Smelter Managers in North America, Europe and Africa. Was
              appointed to the International Primary Aluminum Institute Safety Committee and
              served as Chairman of the Electrical Safety Sub-Committee.
            </Job>
          </Employment>
          <Employment>
            <Year>1992-1994</Year>
            <Job>
              <div style={{fontStyle:'italic'}}>
              Safety & Loss Prevention Consultant, FRP Business Unit, Kaiser Aluminum</div>
              Provided safety and loss prevention consulting services to the Flat Rolled Products
              Business Unit
            </Job>
          </Employment>
          <Employment>
            <Year>1974-1992</Year>
            <Job>
              <div style={{fontStyle:'italic'}}>
              Various safety and health management positions at Kaiser Aluminum facilities</div>
            </Job>
          </Employment>
          <Employment>
            <Year>1972-1974</Year>
            <Job>
              <div style={{fontStyle:'italic'}}>
              Safety Director, White Pine Copper Company, Copper Range Inc.</div>
            </Job>
          </Employment>
          <Employment>
            <Year>1970-1972</Year>
            <Job>
              <div style={{fontStyle:'italic'}}>
              Human Resources Manager, Erie Marine Division, Litton Industries</div>
            </Job>
          </Employment>
          <Employment>
            <Year>1968-1970</Year>
            <Job>
              <div style={{fontStyle:'italic'}}>
              Sr. Industrial Relations Representative, Kaiser Refractories</div>
            </Job>
          </Employment>
          <Employment>
            <Year>1966-1968</Year>
            <Job>
              <div style={{fontStyle:'italic'}}>
              Safety Engineer, Ford Motor Company</div>
            </Job>
          </Employment>
          <h4>PUBLICATIONS</h4>
          <p>
            "The Search for Protective Clothing for Workers Exposed to the Hazards of Molten
            Aluminum and Molten Bath", (R. R. McHaney), <UnderLine>Health and Safety in Mining and
            Metallurgy</UnderLine>, 1996.
          </p>
          <p>
            "It’s Time to take a Stance on Compliance to Part 46", (R. R. McHaney and M. A.
            Copeland), <UnderLine>Aggregates Management Magazine</UnderLine>, 2000.
          </p>
          <p>
            “Safety Solution: Conveyor Spillage Prevention”, (Ron McHaney), NIOSH, 2002
            <UnderLine>http://www.cdc.gov/niosh/mining/topics/machinesafety/equipmentdsgn/conveyorspillage.htm</UnderLine>
          </p>
          <p>
            “Safety Solution: Preventing Slide-Backs on Slope Conveyors”, (Ron McHaney),
            NIOSH, 2002
            <UnderLine>http://www.cdc.gov/niosh/mining/topics/machinesafety/equipmentdsgn/slidebacks.htm</UnderLine>
          </p>
          <p>
            “The Advantage of Training for Value”, (Ron McHaney), <UnderLine>Aggregates Manager</UnderLine>,
            October 2003.
          </p>
          <p>
            “Beating the Hidden Costs of Safety Training”, (Kristi McHaney and Ron
            McHaney), <UnderLine>Aggregates Manager</UnderLine>, November/December 2004.
          </p>
          <p>
            “A Competitive Advantage – Searching for a Champion”, (Kristi McHaney and Ron
            McHaney), <UnderLine>Stone, Sand & Gravel Review</UnderLine>, January/February 2005.
          </p>
          <p>
            <UnderLine>Patty’s Industrial Hygiene, Sixth Edition, Volume 4, Part VIII; Specialty Areas of
            Practice, Chapter 47; Emergency and Disaster: Preparedness, Response and
            Recovery</UnderLine>,2011, (Ron McHaney), Section 1.4 “Planned and Unplanned Events”;
            Section 7.1“Natural Threats”; Section 7.5 “Civil Unrest, Workplace Violence &
            Strikes”.
          </p>
          <h4>PAPER PRESENTATIONS</h4>
          <p>
            "A System for Sharing Solutions", (R.R. McHaney, Steve Anderson) paper presented
            at the 1995 Meeting of the International Primary Aluminum Institute Safety
            Committee, Paris, France.
          </p>
          <p>
            "The Search for Protective Clothing for Workers Exposed to the Hazards of Molten
            Aluminum and Molten Bath", (R. R. McHaney) paper presented at the 1996
            Institution of Mining and Metallurgy International Conference on Health and Safety
            In Mining and Metallurgy, Regent's College, London, England.
          </p>
          <p>
            "Safety Solutions Network", (R.R. McHaney) paper presented at the 1996 Aluminum
            Industry Loss prevention Workshop, Orlando Florida.
          </p>
          <p>
            "Training for Value", (R. R. McHaney and M. A. Copeland), paper presented at the
            California Mining Association Conference, Sacramento, California, February 13 -
            15, 2001.
          </p>
          <p>
            “Safety Compliance – Are You Really Prepared” (R. R. McHaney) paper presented
            at the California Precast Concrete Association Conference, Las Vegas, Nevada,
            November 10, 2006.
          </p>
          <h4>PROFESSIONAL AFFILIATIONS</h4>
          <ul>
            <li>American Society of Safety Engineers</li>
            <li>Board of Certified Safety Professionals</li>
            <li>ANSI Z117.1 Committee – Safety Requirements for Confined Spaces</li>
          </ul>
          <ButtonDiv >
            <A href="/assets/images/mchaneycv.pdf" download>
              Download PDF
            </A>
          </ButtonDiv>
      </div>
      <div>
        <Img src={ronPhoto} />
      </div>
    </Container>
  );
}

export default CurVit;
