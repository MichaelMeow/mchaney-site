import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Text = styled.div`{
  padding: 100px 100px 60px 100px;
  margin-top: 0px;
}`;
export const Title = styled.h2`{
  font-family: 'Libre Baskerville', serif;
  font-weight: 700;
  margin-bottom: 10px;
}`;

export const Title2 = styled.h3`{
  font-family: 'Libre Baskerville', serif;
  font-weight: 700;
  margin-bottom: 10px;
}`;

export const SubHeadline = styled.div`{
  margin-bottom: 20px;
  width: 400px;
}`;
export const SubTitles = styled.div`{
  margin: 5vw;
  display: flex;
  justify-content: space-around;
}`;
export const Paragraphs = styled.div`{
  margin: 2vw;
  display: flex;
  flex-basis: 0;
  justify-content: space-around;
}`;
export const SubTitle = styled.div`{
  font-style: italic;
  font-size: 1.2rem;
}`;
export const Paragraph = styled.div`{
  padding: 15px;
  font-size: 1.2rem;
}`;
export const FlexColumn = styled.div`{
  display: flex;
  flex-direction: column;
  align-items: center;
}`;

export const ButtonOne = styled(Link)`{
  text-decoration: none;
  color: white;
  margin-bottom: 100px;
  height: 60px;
  width: 220px;
  background-color: #8da2a5;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid #8da2a5 3px;
  border-radius: 2px;
  box-shadow: 4px 4px 10px 1px grey;
  transition: all 300ms ease-in-out;
  &:hover {
    background: whitesmoke;
    color: #8da2a5;
  }
}`;
export const ButtonOneExternal = styled.a`{
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
  border: solid #8da2a5 3px;
  box-shadow: 4px 4px 10px 1px grey;
  transition: all 300ms ease-in-out;
  &:hover {
    background: whitesmoke;
    color: #8da2a5;
  }
}`;
export const ButtonTwo = styled(Link)`{
  margin-bottom: 100px;
  text-decoration: none;
  color: white;
  height: 60px;
  width: 220px;
  background-color: #063253;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  box-shadow: 4px 4px 10px 1px grey;
  transition: all 300ms ease-in-out;
  &:hover {
    background: whitesmoke;
    color: black;
  }
}`;

export const Page = styled.div`{
  min-width: 700px;
  max-width: 70vw;
  background-color: white;
}`;
