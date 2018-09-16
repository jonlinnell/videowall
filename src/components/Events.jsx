import React from 'react'

import Event from './Event'
import Title from './Title'
import MoreInfo from './MoreInfo'
import ScreenContentWrapper from './ScreenContentWrapper'

const Events = ({ items }) => (
  <ScreenContentWrapper>
    <Title>Upcoming Events</Title>
    {
      items.slice(0, 4).map(item => <Event key={item.guid} event={item} />)
    }
    <MoreInfo>See what else is coming up: lborolondon.ac.uk/Events</MoreInfo>
  </ScreenContentWrapper>
)

export default Events
