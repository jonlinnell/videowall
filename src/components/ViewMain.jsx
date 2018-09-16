import React from 'react'
import styled from 'styled-components'

import News from './News'
import Events from './Events'

import Screen from './Screen'

const Screen3x3 = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 3240px;
  width: 5760px;

  outline: 1px solid white;
`

const RightScreensWrapper = styled.div`
  position: absolute;
  left: 5761px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Screen1080 = styled.div`
  height: 1080px;
  width: 1920px;

  padding-left: 32px;

  outline: 1px solid white;

  overflow: hidden;
`

const ViewMain = () => (
  <div>
    <Screen3x3><p>I am some text</p></Screen3x3>
    <RightScreensWrapper>
      <Screen1080>
        <Screen
          render={News}
          feed="http://www.lborolondon.ac.uk/rss/news.xml"
        />
      </Screen1080>
      <Screen1080>
        <Screen
          render={Events}
          feed="http://www.lborolondon.ac.uk/rss/events.xml"
        />
      </Screen1080>
      <Screen1080><p>I am a bottom screen</p></Screen1080>
    </RightScreensWrapper>
  </div>
)

export default ViewMain
