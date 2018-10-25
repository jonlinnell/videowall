import React from 'react'
import styled from 'styled-components'

import Events from '../components/Events/Events'
import ScreenTravel from '../components/Travel/ScreenTravel'
import Screen3x3 from '../components/Screen3x3'
import Screen1080 from '../components/Screen1080'

import FeedContainer from '../components/FeedContainer'

import bg from '../images/bg_pattern_transparency.png'
import NewsScroller from '../components/News/NewsScroller'

const RightScreensWrapper = styled.div`
  position: absolute;
  left: 5761px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const BGPatternWrapper = styled.div`
  height: 3240px;
  width: 7680px;

  background-image: url(${bg});

  overflow: hidden;
`

const BGColourWrapper = styled.div`
  height: 3240px;
  width: 7680px;

  position: relative;

  &::before{
    content: '';
    width: 100%;
    height: 100%;

    position: absolute;
    left: 0;
    top: 0;

    z-index: 1;
    background-color: rgb(183, 0, 98);
    mix-blend-mode: screen;
  }
`

const BGContentWrapper = styled.div`
  height: 3240px;
  width: 7680px;

  z-index: 2;
  position: absolute;
  mix-blend-mode: normal;
`

const ViewMain = () => (
  <BGPatternWrapper>
    <BGColourWrapper>
      <BGContentWrapper>
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
      </BGContentWrapper>
    </BGColourWrapper>
  </BGPatternWrapper>
)

export default ViewMain
