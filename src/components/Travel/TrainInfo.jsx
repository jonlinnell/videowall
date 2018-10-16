import React from 'react'
import styled from 'styled-components'

const TrainInfo = styled.div`
  font-family: "DIN Light";
  color: white;
  padding: ${({ theme }) => theme.boxPadding} 0;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: middle;
  justify-content: middle;
  margin: 8px 0 12px 0;
`

const Destination = styled.p`
  font-size: 24px;
  margin: 0 ${({ theme }) => theme.boxMargin};
`

const Time = styled.p`
  font-size: 36px;
  line-height: 36px;
  margin: 0 ${({ theme }) => theme.boxMargin};
`

const LateText = styled.p`
  font-size: 18px;
  line-height: 36px;
  margin: 0;

  color: rgb(244, 113, 66);
`

const Platform = styled.p`
  margin: 0 ${({ theme }) => theme.boxMargin} 0 auto;
  font-family: 'DIN Extlight';
  font-size: 18px;
`

const renderServiceInfo = (etd) => {
  if (etd === 'Cancelled') {
    return <LateText>Cancelled</LateText>
  } else if (etd === 'Delayed') {
    return <LateText>Delayed</LateText>
  } else if (etd !== 'On time') {
    return <LateText>Delayed, estimated {etd}</LateText>
  }

  return null
}

export default ({
  std,
  etd,
  destination,
  platform,
}) => (
  <TrainInfo>
    <Row>
      <Time>{std}</Time>
      { renderServiceInfo(etd) }
    </Row>
    <Row>
      <Destination>{destination.name}</Destination>
      <Platform>{ platform }</Platform>
    </Row>
  </TrainInfo>
)
