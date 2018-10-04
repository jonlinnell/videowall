import React from 'react'
import styled from 'styled-components'

import TubeStatus from './TubeStatus'
import BusDepartures from './BusDepartures'
import Title from '../Title'

const Container = styled.div`
  display: grid;
  grid: auto-flow / 1fr 1fr 1fr;
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
        <BusDepartures stopCode="91426" />
      </Column>
      <Column>3</Column>
    </Container>
  </div>
)

export default ScreenTravel
