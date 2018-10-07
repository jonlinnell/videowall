import React, { PureComponent } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import TrainInfo from './TrainInfo'

import { api } from '../../../config.json'

const INTERVAL = 1 // in minutes

const RailDeparturesWrapper = styled.div`
  background-color: rgba(0,0,0,0.15);

  & > div {
    :last-child {
      border-bottom-left-radius: ${({ theme }) => theme.radius};
      border-bottom-right-radius: ${({ theme }) => theme.radius};
      padding-bottom: ${({ theme }) => theme.boxMargin};
    }
  }
`

const Header = styled.div`
  border-top-left-radius: ${({ theme }) => theme.radius};
  border-top-right-radius: ${({ theme }) => theme.radius};
  padding: 24px;

  font-family: 'DIN Light';
  color: white;
`

const Station = styled.h5`
  font-size: 2rem;
  margin: 0;
`

const Subheading = styled.p`
  font-size: 0.7rem;
  font-family: 'DIN Extlight';

  padding: 0;
  margin: 0;
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
      error: null,
    }
  }

  componentDidMount() {
    this.fetchData()
    this.intervalId = setInterval(() => this.fetchData, INTERVAL * 60000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  intervalId = null

  fetchData = () => {
    const { station, destination } = this.props

    axios.get(`${api}/rail/${station}${destination ? `/${destination}` : ''}`)
      .then(response => this.setState({ data: response.data }))
      .catch(error => this.setState({ error }))
  }

  render() {
    const { data, error } = this.state

    return (
      <RailDeparturesWrapper>
        <Header>
          <Station>{ data.station.name }</Station>
          <Subheading>Next trains departing from this station
            {
              data.destination.name
                ? `, calling at ${data.destination.name}`
                : '.'
            }
          </Subheading>
        </Header>
        {
          error
            ? <pre>{ JSON.stringify(error, null, 2) }</pre>
            : data.trainServices.slice(0, 5).map(train =>
              <TrainInfo key={train.serviceId} {...train} />)
        }
      </RailDeparturesWrapper>
    )
  }
}

export default RailDepartures
