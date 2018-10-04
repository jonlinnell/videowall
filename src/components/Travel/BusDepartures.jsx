import React, { PureComponent } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import BusInfo from './BusInfo'

import { api } from '../../../config.json'

const INTERVAL = 1 // in minutes

const BusDeparturesWrapper = styled.div`
  & > div {
    :first-child {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;

      & > :first-child {
        border-top-left-radius: 6px;
      }
    }

    :last-child {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      
      & > :first-child {
        border-bottom-left-radius: 6px;
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
