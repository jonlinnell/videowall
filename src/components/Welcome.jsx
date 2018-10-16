import React from 'react'
import styled from 'styled-components'

const WelcomeText = styled.p`
  font-size: ${({ large }) => (large ? '256px' : '192px')};
  margin: 0;
  font-family: 'DIN Extlight';
  text-align: center;
  color: rgb(255, 255, 255);
`

const Welcome = () => (
  <div>
    <WelcomeText>Welcome to</WelcomeText>
    <WelcomeText large>Loughborough University London</WelcomeText>
  </div>
)

export default Welcome
