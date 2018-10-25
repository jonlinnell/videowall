import React from 'react'
import styled from 'styled-components'

import Events from '../components/Events/Events'
import ScreenTravel from '../components/Travel/ScreenTravel'
import Screen3x3 from '../components/Screen3x3'
import Screen1080 from '../components/Screen1080'

import FeedContainer from '../components/FeedContainer'

import bg from '../images/ViewMainBG.png'
import NewsScroller from '../components/News/NewsScroller'

const RightScreensWrapper = styled.div`
  position: absolute;
  left: 5761px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const VideowallBGWrapper = styled.div`
  height: 3240px;
  width: 7680px;
  background: url(${bg});

  overflow: hidden;
`

const ViewMain = () => (
  <VideowallBGWrapper>
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
  </VideowallBGWrapper>
)

export default ViewMain
