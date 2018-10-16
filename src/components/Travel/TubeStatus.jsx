import React, { PureComponent } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Attribution from './Attribution'

import TubeLineInfo from './TubeLineInfo'

import { api } from '../../../config.json'

const INTERVAL = 5 // in minutes

const TubeStatusWrapper = styled.div`
  width: 100%;
`

const LineWrapper = styled.div`
  width: 100%;

  & > div {
    :first-child {
      border-top-left-radius: ${props => props.theme.radius};
      border-top-right-radius: ${props => props.theme.radius};
    }

    :last-child {
      border-bottom-left-radius: ${props => props.theme.radius};
      border-bottom-right-radius: ${props => props.theme.radius};
    }
  }
`

class TubeStatus extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      loading: false,
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
    axios.get(`${api}/tube`)
      .then(response => this.setState({ data: response.data }))
      .catch(error => this.setState({ error }))
  }

  render() {
    const { data, error, loading } = this.state

    return (
      <TubeStatusWrapper>
        <LineWrapper>
          {
            data.map(line => <TubeLineInfo line={line} key={line.id} />)
          }
        </LineWrapper>
        <div className="board-footer">
          <Attribution>
            Powered by TfL Open Data. Visit tfl.gov.uk for more information.
          </Attribution>
          {
            loading
            ? <div className="spinner" />
            : null
          }
        </div>
        {
          error
          ? (
            <div className="error">
              <p>{ error }</p>
            </div>
          )
          : null
        }
      </TubeStatusWrapper>
    )
  }
}

export default TubeStatus
