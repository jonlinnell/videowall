import React from 'react'

import Event from './Event'
import Title from './Title'

const Events = ({ items }) => (
  <div>
    <Title>Upcoming Events</Title>
    {
      items.slice(0, 4).map(item => <Event key={item.guid} event={item} />)
    }
  </div>
)

export default Events
