import React from 'react'
import { Grid, Cell } from 'styled-css-grid'

import Event from './Event'

import generateKey from '../../lib/generateKey'

const EventsGrid = ({ items }) => (
  <Grid columns={2}>
    {items
      .map(item => (
        <Cell key={generateKey(item)}>
          <Event event={item} />
        </Cell>
      ))}
  </Grid>
)

export default EventsGrid
