import React from 'react'
import styled from 'styled-components'

import TubeStatus from './TubeStatus'
import BusDepartures from './BusDepartures'
import RailDepartures from './RailDepartures'
import IconNationalRail from './IconNationalRail'
import IconRoundel from './IconRoundel'

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
  <Container>
    <Column>
      <TubeStatus />
    </Column>
    <Column>
      <RailDepartures
        station="HKW"
        limit={4}
        icon={IconRoundel}
        iconWidth={32}
      />
    </Column>
    <Column>
      <RailDepartures
        station="SFA"
        destination="STP"
        limit={4}
        icon={IconNationalRail}
        iconWidth={32}
      />
      <RailDepartures
        station="STP"
        destination="LBO"
        limit={4}
        icon={IconNationalRail}
        iconWidth={32}
      />
    </Column>
    <Column>
      <BusDepartures stopCode={busStopCodes.join(',')} />
    </Column>
  </Container>
)

export default ScreenTravel
