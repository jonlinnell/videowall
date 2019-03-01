import React from 'react'
import styled from 'styled-components'

import VideowallMain from '../components/VideowallMain'
import Background from '../components/VideowallBackground'
import TravelScreen from '../components/VideowallTotemTravel/TravelScreen'
import EventsScreen from '../components/VideowallTotemEvents/EventsScreen'
import NewsScreen from '../components/VideowallTotemNews/NewsScreen'

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
      <NewsScreen />
      <EventsScreen />
      <TravelScreen />
    </VideowallTotem>
  </Background>
)

export default Videowall
