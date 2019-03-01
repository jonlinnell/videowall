import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Screen from '../Screen'
import ScreenContentWrapper from '../ScreenContentWrapper'
import Title from '../Title'
import MoreInfo from '../MoreInfo'
import WebLink from '../WebLink'

import EventsGrid from './EventsGrid'

import { api } from '../../../config.json'

const MAX_EVENTS = 6

export default () => {
  const [events, setEvents] = useState([])

  const fetchEvents = async () => {
    const response = await axios.get(`${api}/events`)

    if (!response.data) {
      console.log('Empty')
    } else {
      setEvents(response.data
        .filter(e => e.location.match(/Loughborough University/gi))
        .slice(0, MAX_EVENTS))
    }
  }

  useEffect(() => {
    fetchEvents()
    const fetchEventsInterval = setInterval(() => fetchEvents(), 1000 * 60 * 60)
    return () => clearInterval(fetchEventsInterval)
  }, [])

  return (
    <Screen>
      <ScreenContentWrapper>
        <Title>Upcoming Events on Campus</Title>
        <EventsGrid items={events} />
        <MoreInfo>
          For more info, go to <WebLink>lborolondon.ac.uk/events</WebLink>.
        </MoreInfo>
      </ScreenContentWrapper>
    </Screen>
  )
}
