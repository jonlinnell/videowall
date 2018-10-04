import React from 'react'
import styled from 'styled-components'

import News from './News/News'
import Events from './Events/Events'
import ScreenTravel from './Travel/ScreenTravel'
import NewsItem from './News/NewsItem'

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
  height: 1032px;
  width: 1872px;

  margin: 24px;

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
          renderItem={NewsItem}
          endpoint="uniNews"
          interval={120}
          title="Uni news"
          moreInfo="To find out more, visit lborolondon.ac.uk/news"
        />
      </Screen1080>
      <Screen1080>
        <Screen
          render={Events}
          endpoint="events"
          interval={120}
          title="Events on CAmpus"
          moreInfo="To see what else is coming up, visit lborolondon.ac.uk/events"
        />
      </Screen1080>
      <Screen1080>
        <ScreenTravel />
      </Screen1080>
    </RightScreensWrapper>
  </ViewMainBGWrapper>
)

export default ViewMain
