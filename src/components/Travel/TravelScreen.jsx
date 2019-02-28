import React from 'react'
import styled from 'styled-components'

import BusDepartures from './BusDepartures'
import Clock from './Clock'
import IconNationalRail from './IconNationalRail'
import IconRoundel from './IconRoundel'
import RailDepartures from './RailDepartures'
import Screen from '../Screen'
import TubeStatus from './TubeStatus'
import WebLink from '../WebLink'

import { travel } from '../../../config.json'

const { busStopCodes } = travel

const TravelGridContainer = styled.div`
  display: grid;
  grid: auto-flow / 1fr 1fr 1fr 1fr;

  height: ${({ theme: { screenPadding } }) => 1080 - screenPadding * 2}px;
  overflow: hidden;
`

const Column = styled.div`
  display: flex;
  padding: ${({ theme: { columnPadding } }) => `${columnPadding.y}px ${columnPadding.x}px`};
  flex-direction: column;
  align-items: start;

  height: ${({ theme: { screenPadding } }) => 1080 - screenPadding * 2}px;
  overflow: hidden;

  & > div {
    margin-bottom: ${({ theme: { boxMargin } }) => boxMargin};
    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
    mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
  }
`

const TravelFooter = styled.div`
  margin-top: auto;
`

const AdditionalInformation = styled.div`
  color: white;
  font-size: 24px;
  font-family: 'DIN Light';
  padding: ${({ theme: { boxPadding } }) => boxPadding} 0;
`

const ScreenTravel = () => (
  <Screen>
    <TravelGridContainer>
      <Column>
        <TubeStatus />
      </Column>
      <Column>
        <RailDepartures station="HKW" limit={8} icon={IconRoundel} />
      </Column>
      <Column>
        <RailDepartures station="SFA" destination="STP" limit={3} icon={IconNationalRail} />
        <RailDepartures station="STP" destination="LBO" limit={2} icon={IconNationalRail} />
      </Column>
      <Column>
        <BusDepartures stopCode={busStopCodes.join(',')} />
        <TravelFooter>
          <AdditionalInformation>
            Take this with you when you go. Visit
            <WebLink> travel.lboro.london </WebLink>
            on your smartphone or tablet.
          </AdditionalInformation>
          <Clock />
        </TravelFooter>
      </Column>
    </TravelGridContainer>
  </Screen>
)

export default ScreenTravel
