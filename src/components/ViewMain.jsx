import React from 'react'
import styled from 'styled-components'

import Events from './Events/Events'
import ScreenTravel from './Travel/ScreenTravel'
import Screen3x3 from './Screen3x3'
import Screen1080 from './Screen1080'

import FeedContainer from './FeedContainer'

import bg from '../images/ViewMainBG.png'
import NewsScroller from './News/NewsScroller'

const RightScreensWrapper = styled.div`
  position: absolute;
  left: 5761px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const ViewMainBGWrapper = styled.div`
  height: 3240px;
  width: 7680px;
  background: url(${bg});
`

const ViewMain = () => (
  <ViewMainBGWrapper>
    <Screen3x3 />
    <RightScreensWrapper>
      <Screen1080>
        <NewsScroller />
      </Screen1080>
      <Screen1080>
        <FeedContainer
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
