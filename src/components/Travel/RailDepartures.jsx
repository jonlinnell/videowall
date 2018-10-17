import React, { PureComponent } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import TrainInfo from './TrainInfo'
import Error from '../Error'

import { api } from '../../../config.json'

const INTERVAL = 1 // in minutes

const RailDeparturesWrapper = styled.div`
  width: 100%;
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

const HeaderTop = styled.div`
  display: flex;
  flex-direction: row;
  align-content: start;
  align-items: center;
`

const Station = styled.h4`
  font-size: 28px;
  margin: 0;
`

const Subheading = styled.p`
  font-size: 18px;
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
    this.intervalId = setInterval(() => this.fetchData(), INTERVAL * 60000)
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
    const { limit, icon, iconWidth } = this.props

    const Icon = styled(icon)`
      margin-left: auto;
      fill: white;
      stroke: white;
    `

    if (error) {
      return (
        <Error
          error={error}
          callerDescription="train departures info"
        />
      )
    }

    return (
      <RailDeparturesWrapper>
        <Header>
          <HeaderTop>
            <Station>{ data.station.name }</Station>
            <Icon width={iconWidth} />
          </HeaderTop>
          {
            data.destination.name
              ? <Subheading>{`Trains calling at ${data.destination.name}`}</Subheading>
              : null
          }
        </Header>
        {
          data.trainServices.slice(0, limit).map(train =>
            <TrainInfo key={train.serviceId} {...train} />)
        }
      </RailDeparturesWrapper>
    )
  }
}

export default RailDepartures
