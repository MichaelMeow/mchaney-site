import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from './assets/images/splash.jpg'
import styled from 'styled-components';
import { slowZoom } from './slowZoom';
import { bounce } from './bounce';

const Container = styled.div`{
  min-height: 100vh;
  overflow: hidden;
}`;

const Img = styled.div`{
  animation: ${slowZoom} 30s ease-out 0s;
  background-image: url(${homeImage});
  background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: .7;
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0px;
  animation-fill-mode: forwards;
}`;

const ImgContainer = styled.div`{
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
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
  transition: all 300ms ease-in-out;
&:hover {
  background: whitesmoke;
  color: black;
}
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
  transition: opacity 300ms ease-in-out;
&:hover {
  opacity: .7;
}
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
  animation: ${bounce} 2s ease-in-out 0s infinite;
  position: absolute;
  bottom: 10vh;
}`;


function Splash() {
  return (
    <Container>
      <ImgContainer>
        <Img />
      </ImgContainer>
      <Div>
        <Headline>Experts in the Field of Industrial Safety</Headline>
        <Headline>Our Focus is <Italic>Excellence</Italic></Headline>
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
