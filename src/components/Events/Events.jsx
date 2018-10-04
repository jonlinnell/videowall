import React from 'react'
import { Grid, Cell } from 'styled-css-grid'

import Event from './Event'
import Title from '../Title'
import MoreInfo from '../MoreInfo'
import ScreenContentWrapper from '../ScreenContentWrapper'

import generateKey from '../../lib/generateKey'

const MAX_EVENTS = 4

const Events = ({ title, items, moreInfo }) => (
  <ScreenContentWrapper>
    <Title>{ title }</Title>
    <Grid columns={2}>
      {
        items.slice(0, MAX_EVENTS).map(item => (
          <Cell key={generateKey(item)}>
            <Event event={item} />
          </Cell>
        ))
      }
    </Grid>
    <MoreInfo>{ moreInfo }</MoreInfo>
  </ScreenContentWrapper>
)

export default Events
