import React, { PureComponent } from 'react'
import axios from 'axios'
import moment from 'moment-timezone'
import styled from 'styled-components'

import { coords } from '../../../config.json'

const { latitude, longitude, timezone } = coords

class BGColourWrapper extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      night: false,
      sunset: null,
      sunrise: null,
    }
  }

  componentDidMount() {
    this.fetchSunsetTimes()
    this.fetchSunsetTimesInterval = setInterval(() => {
      this.fetchSunsetTimes()
    }, 6 * 1000 * 60 * 60) // 6 hours

    this.nightCheckInterval = setInterval(() => {
      this.isItNight()
    }, 5 * 1000 * 60) // 5 minutes
  }

  componentWillUnmount() {
    clearInterval(this.nightCheckInterval)
  }

  nightCheckInterval = null
  fetchSunsetTimesInterval = null

  fetchSunsetTimes = () => {
    axios
      .get(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`)
      .then(({ data: { results } }) => {
        const { sunset, sunrise } = results

        this.setState({
          sunset: moment(sunset, timezone),
          sunrise: moment(sunrise, timezone),
        }, () => this.isItNight())
      })
  }

  isItNight = () => {
    const { sunset, sunrise } = this.state
    const now = moment().tz(timezone)

    this.setState({ night: ((now.isAfter(sunset)) || (now.isBefore(sunrise))) })
  }

  render() {
    return (
      <BGColour nightMode={this.state.night}>
        { this.props.children }
      </BGColour>
    )
  }
}

const BGColour = styled.div`
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
    background-color: ${({ theme: { colours }, nightMode }) => (nightMode ? colours.sunset : colours.mulberry)};
    mix-blend-mode: screen;

    transition: background-color ease-in 30s;
  }
`

export default BGColourWrapper
