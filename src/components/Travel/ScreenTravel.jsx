import React from 'react'
import styled from 'styled-components'

import TubeStatus from './TubeStatus'
import BusDepartures from './BusDepartures'
import RailDepartures from './RailDepartures'
import Title from '../Title'

import { travel } from '../../../config.json'

const { busStopCodes } = travel

const Container = styled.div`
  display: grid;
  grid: auto-flow / 1fr 1fr 1fr 1fr;
`
const Column = styled.div`
  display: flex;
  margin: 0 1rem; 
  flex-direction: column;
`

const ScreenTravel = () => (
  <div>
    <Title>Travel</Title>
    <Container>
      <Column>
        <TubeStatus />
      </Column>
      <Column>
        <TubeStatus />
      </Column>
      <Column>
        <BusDepartures stopCode={busStopCodes.join(',')} />
      </Column>
      <Column>
        <RailDepartures
          station="SFA"
          destination="STP"
          limit={4}
        />
      </Column>
    </Container>
  </div>
)

export default ScreenTravel
