import React from 'react'
import styled from 'styled-components'

import TubeStatus from './TubeStatus'
import Title from '../Title'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
`

const ScreenTravel = () => (
  <div>
    <Title>Travel</Title>
    <Container>
      <Column>
        <TubeStatus />
      </Column>
      <Column>2</Column>
      <Column>3</Column>
    </Container>
  </div>
)

export default ScreenTravel
