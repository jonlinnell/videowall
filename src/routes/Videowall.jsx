import React from 'react'
import styled from 'styled-components'

import TravelScreen from '../components/Travel/TravelScreen'
import EventsScreen from '../components/Events/EventsScreen'
import VideowallMain from '../components/VideowallMain'
import Screen from '../components/Screen'

import Background from '../components/Background'

const VideowallTotem = styled.div`
  position: absolute;
  left: 5761px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Videowall = () => (
  <Background>
    <VideowallMain />
    <VideowallTotem>
      <Screen />
      <EventsScreen />
      <TravelScreen />
    </VideowallTotem>
  </Background>
)

export default Videowall
