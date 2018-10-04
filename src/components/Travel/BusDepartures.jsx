import React, { PureComponent } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import BusInfo from './BusInfo'

import { api } from '../../../config.json'

const INTERVAL = 1 // in minutes

const BusDeparturesWrapper = styled.div`
  & > div {
    :first-child {
      border-top-left-radius: ${props => props.theme.radius};
      border-top-right-radius: ${props => props.theme.radius};

      & > :first-child {
        border-top-left-radius: ${props => props.theme.radius};
      }
    }

    :last-child {
      border-bottom-left-radius: ${props => props.theme.radius};
      border-bottom-right-radius: ${props => props.theme.radius};
      
      & > :first-child {
        border-bottom-left-radius: ${props => props.theme.radius};
      }
    }
  }
`

class BusDepartures extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
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
    const { data, error } = this.state

    return (
      <BusDeparturesWrapper>
        {
          error
            ? <pre>{ JSON.stringify(error, null, 2) }</pre>
            : data.map(bus => <BusInfo {...bus} />)
        }
      </BusDeparturesWrapper>
    )
  }
}

export default BusDepartures
