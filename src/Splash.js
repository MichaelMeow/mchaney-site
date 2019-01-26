import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from './assets/images/homeimage.png'
import styled from 'styled-components';

const Container = styled.div`{
  min-height: 100vh;
  overflow: hidden;
}`;

const Img = styled.img`{
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0px;
  z-index: -1;
}`;

const Div = styled.div`{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28vh;
}`;

const ButtonDiv = styled.div`{
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  color: white;
  font-size: 1.2rem;
}`;

const ButtonTwo = styled(Link)`{
  text-decoration: none;
  color: white;
  height: 60px;
  width: 180px;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
}`;

const ButtonOne = styled(Link)`{
  text-decoration: none;
  color: white;
  height: 60px;
  width: 180px;
  background-color: #8da2a5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
}`;

const Headline = styled.div`{
  color: white;
  font-size: 2rem;
  font-family: 'Libre Baskerville', serif;
  font-weight: 700;
}`;

const Italic = styled.span`{
  font-weight: 400;
  font-style: italic;
}`;

const Arrow = styled.svg`{
  transform: scale(.4);
  position: absolute;
  bottom: 10vh;
}`;


function Splash() {
  return (
    <Container>
      <Img src={homeImage} />
      <Div>
        <Headline>McHaney is the <Italic>Cost-Effective</Italic> solution for </Headline>
        <Headline>OSHA compliant Medical Evaluations &</Headline>
        <Headline>Online Safety Training Content</Headline>
        <ButtonDiv>
          <ButtonOne to="/whyus">Why Us?</ButtonOne>
          <ButtonTwo to="/clients">Clients</ButtonTwo>
        </ButtonDiv>
        <Arrow version="1.1" id="Layer_1" x="0px" y="0px"
        	 width="124.78px" height="50.479px" viewBox="0 0 124.78 50.479" enable-background="new 0 0 124.78 50.479">
        <line fill="none" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" stroke-miterlimit="10" x1="3.5" y1="3.5" x2="61.761" y2="46.979"/>
        <line fill="none" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" stroke-miterlimit="10" x1="121.28" y1="3.5" x2="63.021" y2="46.979"/>
        </Arrow>
      </Div>
    </Container>
  );
}

export default Splash;
