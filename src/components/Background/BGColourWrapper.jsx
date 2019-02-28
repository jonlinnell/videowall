import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment-timezone'
import styled from 'styled-components'

import { coords } from '../../../config.json'

const { latitude, longitude, timezone } = coords

const BGColour = styled.div`
  height: 3240px;
  width: 7680px;

  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;

    position: absolute;
    left: 0;
    top: 0;

    z-index: 1;
    background-color: ${({ theme: { colours }, nightMode }) =>
    (nightMode ? colours.sunset : colours.mulberry)};
    mix-blend-mode: screen;

    transition: background-color ease-in 3s;
  }
`

const BGColourWrapper = ({ children }) => {
  const [cycleData, setCycleData] = useState()
  const [now, setNow] = useState(moment().tz(timezone))

  const fetchCycleData = async () => {
    const response = await axios.get(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`)

    // // Leaving this in for innevitable future debugging...
    // const response = {
    //   data: {
    //     results: {
    //       sunrise: '2019-02-28T06:46:34+00:00',
    //       sunset: '2019-02-28T13:28:33+00:00',
    //       solar_noon: '2019-02-28T12:12:33+00:00',
    //       day_length: 39119,
    //       civil_twilight_begin: '2019-02-28T06:13:06+00:00',
    //       civil_twilight_end: '2019-02-28T18:12:01+00:00',
    //       nautical_twilight_begin: '2019-02-28T05:34:28+00:00',
    //       nautical_twilight_end: '2019-02-28T18:50:39+00:00',
    //       astronomical_twilight_begin: '2019-02-28T04:55:35+00:00',
    //       astronomical_twilight_end: '2019-02-28T19:29:31+00:00',
    //     },
    //     status: 'OK',
    //   },
    // }

    if (!response || response.data.status !== 'OK') {
      console.error('There was an error loading solar cycle data.')
    } else {
      setCycleData(response.data.results)
    }
  }

  useEffect(() => {
    fetchCycleData()
    const sunrisePollInterval = setInterval(() => fetchCycleData(), 6 * 1000 * 60 * 60)

    return () => clearInterval(sunrisePollInterval)
  }, [])

  useEffect(() => {
    const updateNowInterval = setInterval(() => setNow(moment().tz(timezone)), 5 * 1000 * 60)

    return () => clearInterval(updateNowInterval)
  }, [])

  return (
    <BGColour
      nightMode={
        cycleData
          ? now.isBefore(moment(cycleData.sunrise)) || now.isAfter(moment(cycleData.sunset))
          : false
      }
    >
      {children}
    </BGColour>
  )
}

export default BGColourWrapper
