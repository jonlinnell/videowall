import React, { PureComponent } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import BusInfo from './BusInfo'
import IconRoundel from './IconRoundel'
import Error from '../Error'

import TravelBoxHeader from './TravelBoxHeader'

import { api } from '../../../config.json'

const INTERVAL = 0.5 // in minutes

const BusDeparturesWrapper = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.colours.bus};
  
  border-radius: ${({ theme: { radius } }) => radius};
`

class BusDepartures extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        stopName: null,
        buses: [],
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
    const { stopCode } = this.props

    axios.get(`${api}/bus/${stopCode}`)
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
    const { data: { stopName, buses }, hasError, error } = this.state

    if (hasError) {
      return (
        <Error
          error={error}
          callerDescription="bus info"
        />
      )
    }

    return (
      <BusDeparturesWrapper>
        <TravelBoxHeader
          title={stopName}
          icon={IconRoundel}
        />
        {
          buses.map(bus => <BusInfo key={bus.journeyId} {...bus} />)
        }
      </BusDeparturesWrapper>
    )
  }
}

export default BusDepartures
