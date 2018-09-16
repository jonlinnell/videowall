import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-family: "DIN Regular";
  font-size: 3rem;
  color: rgb(255, 255, 255);
`

const TitleWrapper = ({ children }) => (
  <Title>
    { children }
  </Title>
)

export default TitleWrapper
