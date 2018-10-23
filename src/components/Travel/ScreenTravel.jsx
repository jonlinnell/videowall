import React from 'react'
import styled from 'styled-components'

import TubeStatus from './TubeStatus'
import BusDepartures from './BusDepartures'
import RailDepartures from './RailDepartures'
import IconNationalRail from './IconNationalRail'
import IconRoundel from './IconRoundel'
import Clock from './Clock'

import { travel } from '../../../config.json'

const { busStopCodes } = travel

const TravelGridContainer = styled.div`
  display: grid;
  grid: auto-flow / 1fr 1fr 1fr 1fr;

  height: ${({ theme }) => 1080 - (theme.screenPadding * 2)}px;
  overflow: hidden;
`
const Column = styled.div`
  display: flex;
  padding: ${({ theme: { columnPadding } }) => `${columnPadding.y}px ${columnPadding.x}px`}; 
  flex-direction: column;
  align-items: start;

  height: ${({ theme }) => 1080 - (theme.screenPadding * 2)}px;
  overflow: hidden;
`

const TravelFooter = styled.div`
  margin-top: auto;
`

const WebLink = styled.span`
  font-family: 'DIN Regular';
`

const AdditionalInformation = styled.div`
  color: white;
  font-size: 24px;
  font-family: 'DIN Light';
  padding: ${({ theme }) => theme.boxPadding} 0;
`

const ScreenTravel = () => (
  <TravelGridContainer>
    <Column>
      <TubeStatus />
    </Column>
    <Column>
      <RailDepartures
        station="HKW"
        limit={9}
        icon={IconRoundel}
        iconWidth={32}
      />
    </Column>
    <Column>
      <RailDepartures
        station="SFA"
        destination="STP"
        limit={3}
        icon={IconNationalRail}
        iconWidth={32}
      />
      <RailDepartures
        station="STP"
        destination="LBO"
        limit={2}
        icon={IconNationalRail}
        iconWidth={32}
      />
    </Column>
    <Column>
      <BusDepartures stopCode={busStopCodes.join(',')} />
      <TravelFooter>
        <AdditionalInformation>
          Take this with you when you go. Visit
          <WebLink> lboro.london/travel </WebLink>
          on your smartphone or tablet.
        </AdditionalInformation>
        <Clock />
      </TravelFooter>
    </Column>
  </TravelGridContainer>
)

export default ScreenTravel
