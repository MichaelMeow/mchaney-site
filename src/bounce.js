import styled, { keyframes } from 'styled-components';

export const bounce = keyframes`
  0% {
    transform: translateY(0px);
    transform: scale(.4);
  }
  50% {
    transform: translateY(20px) scale(.4);
  }
  100% {
    transform: translateY(0px);
    transform: scale(.4);
  }
`
