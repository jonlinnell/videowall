import React from 'react'

import Screen from '../components/Screen'
import Background from '../components/VideowallBackground'

const KioskOutward = () => (
  <Screen portrait>
    <Background height={1920} width={1080} colour="africanViolet" hidePattern>
      <h1>Outward</h1>
    </Background>
  </Screen>
)

export default KioskOutward
