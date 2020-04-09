import React from 'react'
import styled, { keyframes } from 'styled-components';

const blue = '#69C9D0';
const dark = '#282c34';
const green = '#9fea63';
const red = '#EE1D52';
const white = '#ffffff';

const Wrapper = styled.div`
  align-items: center;
  background-color:  ${dark};
  display: flex;
  flex-direction: column;
  font-family:"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif;
  height: 100vh;
  justify-content: center;
`;

const ThreeConteiner = styled('div')`
  background-color: ${green};
  color: #fff;
  cursor: pointer;
  font-size: 50px;
  margin: 5px;
  padding: 20px;
  text-shadow: 0 0 2px ${dark};
  transform: skew(-10deg, -18deg) rotate(-9deg);
  transition: all .3s ease-in-out;

  &:hover {
    text-shadow: -5px -5px 1px ${dark};
    transform: skew(-10deg, -18deg) rotate(-9deg) scale(1.1);
    box-shadow: -5px -5px 0 0 #fff;
  }
`
const bgTranstion = keyframes`
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
`;
const BackgroundText = styled('div')`
  animation: ${bgTranstion} 10s linear infinite;
  background: linear-gradient(to right,
    rgb(76, 217, 105),
    rgb(52, 170, 220),
    rgb(88, 86, 217),
    rgb(255, 45, 83),
    rgb(255, 45, 83),
    rgb(88, 86, 217),
    rgb(52, 170, 220),
    rgb(76, 217, 105)
  );
  background-size: 400%;
  -webkit-background-clip: text;
  color: rgba(255, 255, 255, .1);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';
  font-size: 50px;
  font-weight: 700;
  left: 50%;
  position: absolute;
  text-align: left;
  top: 50%;
  transform: translate(-50%, -50%);
`
// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  animation: ${rotate} 2s linear infinite;
  display: inline-block;
  font-size: 50px;
  padding: 2rem 1rem;
  position: absolute;
  top: 25%;
`;

const shadows = keyframes`
  0%, 100% {
    text-shadow: 4px 0 0 ${red}, 0 -4px 0 ${blue};
  }
  25% {
    text-shadow: 4px 4px 0 ${red}, -4px -4px 0 ${blue};
  }
  50% {
    text-shadow: 0 4px 0 ${red}, -4px 0 0 ${blue};
  }
  75% {
    text-shadow: 0 0 0 ${red}, 0 0 0 ${blue};
  }
`;
const TikTok = styled('div')`
  color: ${white};
  cursor: pointer;
  font-size: 60px;
  letter-spacing: 10px;
  text-shadow: 4px 2px 0 $red, -4px -2px 0 ${blue};

  &:hover {
    animation: ${shadows} 0.2s ease-in infinite;
  }
`

export const DemoOne = () => (
  <Wrapper>
    <ThreeConteiner>Storybook Addon</ThreeConteiner>
    <ThreeConteiner>@khriztianmoreno</ThreeConteiner>
  </Wrapper>
);

export const DemoTwo = () => (
  <Wrapper>
    <BackgroundText>@khriztianmoreno</BackgroundText>
    <Rotate>&lt; 💅🏻 &gt;</Rotate>
  </Wrapper>
);


export const DemoThree = () => (
  <Wrapper>
    <TikTok>@khriztianmoreno</TikTok>
  </Wrapper>
)
