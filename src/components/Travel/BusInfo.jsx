import React from 'react'
import styled from 'styled-components'

const BusInfoContainer = styled.div`
  font-family: "DIN Light";

  display: flex;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
  width: 100%;

  background-color: white;
`

const Service = styled.div`
  font-family: "DIN Medium";

  padding: 12px 24px;

  width: 64px;

  font-size: 22px;
  text-align: right;

  color: white;
  background-color: ${({ theme }) => theme.colours.bus};
`

const Destination = styled.div`
  padding: 12px 24px;
  font-size: 22px;
  line-height: 22px;
  color: black;
`

const ETA = styled.div`
  padding: 18px;
  font-size: 18px;
  line-height: 18px;
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
