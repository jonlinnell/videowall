import React, { PureComponent } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import BusInfo from './BusInfo'
import IconRoundel from './IconRoundel'

import { api } from '../../../config.json'

const INTERVAL = 1 // in minutes

const WhiteRoundel = styled(IconRoundel)`
  fill: white;
  margin-left: auto;
`

const BusDeparturesWrapper = styled.div`
  width: 100%;
  
  & > div {
    :first-child {
      border-top-left-radius: ${({ theme }) => theme.radius};
      border-top-right-radius: ${({ theme }) => theme.radius};

      & > :first-child {
        border-top-left-radius: ${({ theme }) => theme.radius};
      }
    }

    :last-child {
      border-bottom-left-radius: ${({ theme }) => theme.radius};
      border-bottom-right-radius: ${({ theme }) => theme.radius};
      
      & > :first-child {
        border-bottom-left-radius: ${({ theme }) => theme.radius};
      }
    }
  }
`

const Header = styled.div`
  border-top-left-radius: ${({ theme }) => theme.radius};
  border-top-right-radius: ${({ theme }) => theme.radius};

  background-color: ${({ theme }) => theme.colours.bus};
  color: white;
  height: 64px;

  padding: 12px 24px;

  display: flex;
  flex-direction: row;
  align-content: start;
`

const Title = styled.h4`
  font-family: 'DIN Light';
  font-size: 28px;
  line-height: 64px;

  margin: 0;
`

class BusDepartures extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        stopName: null,
        buses: [],
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
    const { stopCode } = this.props

    axios.get(`${api}/bus/${stopCode}`)
      .then(response => this.setState({ data: response.data }))
      .catch(error => this.setState({ error }))
  }

  render() {
    const { data: { stopName, buses }, error } = this.state

    return (
      <BusDeparturesWrapper>
        <Header>
          <Title>{ stopName }</Title>
          <WhiteRoundel width={32} />
        </Header>
        {
          error
            ? <pre>{ JSON.stringify(error, null, 2) }</pre>
            : buses.map(bus => <BusInfo key={bus.journeyId} {...bus} />)
        }
      </BusDeparturesWrapper>
    )
  }
}

export default BusDepartures
