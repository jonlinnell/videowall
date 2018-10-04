import React from 'react'
import styled from 'styled-components'

const BusInfoContainer = styled.div`
  font-family: "DIN Light";

  display: flex;
  flex-direction: row;
  align-content: space-between;
  width: 100%;

  padding: 0;
  background-color: white;
`

const Service = styled.div`
  font-family: "DIN Medium";
  padding: 12px;
  padding-left: 18px;

  color: white;
  background-color: ${({ theme }) => theme.colours.bus};
  min-width: 1.5rem;
`

const Destination = styled.div`
  padding: 12px;
  color: black;
`

const ETA = styled.div`
  padding: 12px;
  color: black;
  margin-left: auto;
`

const BusInfo = ({ destination, service, eta }) => (
  <BusInfoContainer>
    <Service>{ service }</Service>
    <Destination>{ destination }</Destination>
    <ETA>
      {
        eta > 0
          ? `${eta} mins`
          : 'due'
      }
    </ETA>
  </BusInfoContainer>
)

export default BusInfo
