import React, { PureComponent } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import TrainInfo from './TrainInfo'
import Error from '../Error'
import TravelBoxHeader from './TravelBoxHeader'

import { api } from '../../../config.json'

const INTERVAL = 1 // in minutes

const RailDeparturesWrapper = styled.div`
  width: 100%;
  background-color: rgba(0,0,0,0.15);

  border-radius: ${({ theme: { radius } }) => radius};
`

class RailDepartures extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        station: {},
        destination: {},
        trainServices: [],
      },
      hasError: false,
      error: null,
    }
  }

  componentDidMount() {
    this.fetchData()
    this.intervalId = setInterval(() => this.fetchData(), INTERVAL * 60000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  intervalId = null

  fetchData = () => {
    const { station, destination } = this.props

    axios.get(`${api}/rail/${station}${destination ? `/${destination}` : ''}`)
      .then(response => this.setState({
        data: response.data,
        hasError: false,
        error: null,
      }))
      .catch(error => this.setState({
        hasError: true,
        error,
      }))
  }

  render() {
    const { data, hasError, error } = this.state
    const { limit, icon } = this.props

    if (hasError) {
      return (
        <Error
          error={error}
          callerDescription="train departures info"
        />
      )
    }

    return (
      <RailDeparturesWrapper>
        <TravelBoxHeader
          title={data.station.name}
          icon={icon}
          subtitle={data.destination.name ? `Trains calling at ${data.destination.name}` : null}
        />
        {
          data.trainServices.slice(0, limit).map(train =>
            <TrainInfo key={train.serviceId} {...train} />)
        }
      </RailDeparturesWrapper>
    )
  }
}

export default RailDepartures
