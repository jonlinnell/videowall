import React from 'react'
import styled from 'styled-components'

const MoreInfo = styled.p`
  font-family: "DIN Light";
  font-size: 2rem;
  color: rgb(255, 255, 255);
  margin-top: auto;
`

export default ({ children }) => (
  <MoreInfo>
    { children }
  </MoreInfo>
)
