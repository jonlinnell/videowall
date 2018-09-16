import React from 'react'

import Event from './Event'

const Events = ({ items }) => (
  <div>
    {
      items.slice(0, 4).map(item => <Event key={item.guid} event={item} />)
    }
  </div>
)

export default Events
