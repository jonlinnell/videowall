import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-family: "DIN Light";
  font-size: 8rem;
  color: rgb(255, 255, 255);
  margin: 0;
  padding: 0;
  margin-bottom: 2rem;
  text-transform: uppercase;
`

const TitleWrapper = ({ children }) => (
  <Title>
    { children }
  </Title>
)

export default TitleWrapper
