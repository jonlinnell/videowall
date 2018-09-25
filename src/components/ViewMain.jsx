import React from 'react'
import styled from 'styled-components'

import News from './News'
import Events from './Events'

import Screen from './Screen'

import bg from '../images/ViewMainBG.png'

const Screen3x3 = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 3240px;
  width: 5760px;
`

const RightScreensWrapper = styled.div`
  position: absolute;
  left: 5761px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Screen1080 = styled.div`
  height: 888px;
  width: 1728px;

  margin: 96px;

  overflow: hidden;
`

const ViewMainBGWrapper = styled.div`
  height: 3240px;
  width: 7680px;
  background: url(${bg});
`

const ViewMain = () => (
  <ViewMainBGWrapper>
    <Screen3x3><p>I am some text</p></Screen3x3>
    <RightScreensWrapper>
      <Screen1080>
        <Screen
          render={News}
          endpoint="news"
        />
      </Screen1080>
      <Screen1080>
        <Screen
          render={Events}
          endpoint="events"
        />
      </Screen1080>
      <Screen1080><p>I am a bottom screen</p></Screen1080>
    </RightScreensWrapper>
  </ViewMainBGWrapper>
)

export default ViewMain
