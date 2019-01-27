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
const Contacts = styled.div`{
  display: flex;
  justify-content: space-around;
}`;
const ContactsColumn = styled.div`{
}`;
const Contact = styled.div`{
  margin-top: 15px;
  margin-bottom: 4px;
  font-weight: bold;
}`;
const Location = styled.div`{

}`;


function Clients() {
  return (
    <Div>
      <Text >
        <Title>Clients</Title>
        <SubHeadline>McHaney & Associates has served clients all across the United States and Western Europe. We have long term relationships with many of our clients because we continue to add value to their safety process. </SubHeadline>
        <Contacts>
          <ContactsColumn>
            <Contact>
              AerSale Inc.
            </Contact>
            <Location>
              Coral Gables, FL
            </Location>
            <Contact>
              Atwood Malone
            </Contact>
            <Location>
              Roswell, NM
            </Location>
            <Contact>
              Bath Fitter
            </Contact>
            <Location>
              Montreal, Quebec
            </Location>
            <Contact>
              Blue Origin
            </Contact>
            <Location>
              Van Horn, TX
            </Location>
            <Contact>
              Cal State University
            </Contact>
            <Location>
              Fresno, CA
            </Location>
            <Contact>
              New York City DOE
            </Contact>
            <Location>
              New York City, NY
            </Location>
            <Contact>
              College of William & Mary
            </Contact>
            <Location>
              Williamsburg, VA
            </Location>
            <Contact>
              County of Maui
            </Contact>
            <Location>
              Kihei, HI
            </Location>
          </ContactsColumn>
          <ContactsColumn>
            <Contact>
              Federal Reserve Bank
            </Contact>
            <Location>
              12th District
            </Location>
            <Contact>
              Honeywell
            </Contact>
            <Location>
              Providence, RI
            </Location>
            <Contact>
              Laron
            </Contact>
            <Location>
              Kingman, AZ
            </Location>
            <Contact>
              Mears Group
            </Contact>
            <Location>
              Rosebush, MI
            </Location>
            <Contact>
              Motor Coach Industries
            </Contact>
            <Location>
              Des Plaines, IL
            </Location>
            <Contact>
              Nike
            </Contact>
            <Location>
              Beaverton, OR
            </Location>
            <Contact>
              NIOSH
            </Contact>
            <Location>
              Spokane, WA
            </Location>
          </ContactsColumn>
          <ContactsColumn>
            <Contact>
              Olympic Peninsula Personnel
            </Contact>
            <Location>
              Tiffany, WA
            </Location>
            <Contact>
              Panhandle Oil Field Services
            </Contact>
            <Location>
              Liberal, KS
            </Location>
            <Contact>
              PCC Structurals
            </Contact>
            <Location>
              Groton, CT
            </Location>
            <Contact>
              Ranson Law Offices
            </Contact>
            <Location>
              Charleston, WV
            </Location>
            <Contact>
              Reliant Drywall
            </Contact>
            <Location>
              Frederick, MD
            </Location>
            <Contact>
              Rodriguez Law Firm
            </Contact>
            <Location>
              Dallas, TX
            </Location>
            <Contact>
              ServPro
            </Contact>
            <Location>
              Many Locations
            </Location>
          </ContactsColumn>
          <ContactsColumn>
            <Contact>
              Shaklee Corporation
            </Contact>
            <Location>
              Pleasanton, CA
            </Location>
            <Contact>
              Tandem Products
            </Contact>
            <Location>
              Blooming Prairie, MN
            </Location>
            <Contact>
              Texas State University
            </Contact>
            <Location>
              San Marcos, TX
            </Location>
            <Contact>
              Thorndal Armstrong
            </Contact>
            <Location>
              Reno, NV
            </Location>
            <Contact>
              Timber Products Manufacturers Association
            </Contact>
            <Location>
              Spokane, WA
            </Location>
            <Contact>
              Veolia Water
            </Contact>
            <Location>
              Maynard, MA
            </Location>
            <Contact>
              Virgin Orbit
            </Contact>
            <Location>
              Long Beach, CA
            </Location>
          </ContactsColumn>
        </Contacts>
      </Text>
    </Div>
  );
}

export default Clients;
