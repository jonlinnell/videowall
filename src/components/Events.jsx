import React from 'react'
import { Grid, Cell } from 'styled-css-grid'

import Event from './Event'
import Title from './Title'
import MoreInfo from './MoreInfo'
import ScreenContentWrapper from './ScreenContentWrapper'

const Events = ({ items }) => (
  <ScreenContentWrapper>
    <Title>Upcoming Events</Title>
    <Grid columns={2}>
      {
        items.slice(0, 4).map(item => <Cell key={item.guid}><Event event={item} /></Cell>)
      }
    </Grid>
    <MoreInfo>See what else is coming up: lborolondon.ac.uk/Events</MoreInfo>
  </ScreenContentWrapper>
)

export default Events
