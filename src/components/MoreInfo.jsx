import React from 'react'
import styled from 'styled-components'

const MoreInfo = styled.p`
  font-family: "DIN Light";
  font-size: 1rem;
  color: rgb(255, 255, 255);
  margin-top: auto;
`

const MoreInfoWrapper = ({ children }) => (
  <MoreInfo>
    { children }
  </MoreInfo>
)

export default MoreInfoWrapper
