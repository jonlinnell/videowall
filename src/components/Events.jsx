import React from 'react'
import { Grid, Cell } from 'styled-css-grid'

import Event from './Event'
import Title from './Title'
import MoreInfo from './MoreInfo'
import ScreenContentWrapper from './ScreenContentWrapper'

const MAX_EVENTS = 4

const Events = ({ items }) => (
  <ScreenContentWrapper>
    <Title>Upcoming Events</Title>
    <Grid columns={2}>
      {
        items.slice(0, MAX_EVENTS).map(item => <Cell key={item.guid}><Event event={item} /></Cell>)
      }
    </Grid>
    <MoreInfo>To see what else is coming up, visit lborolondon.ac.uk/events</MoreInfo>
  </ScreenContentWrapper>
)

export default Events
