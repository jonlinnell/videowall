import React, { PureComponent } from 'react'
import axios from 'axios'

import Attribution from './Attribution'

import TubeLineInfo from './TubeLineInfo'

import { api } from '../../../config.json'

const INTERVAL = 2 // in minutes

class TubeStatusView extends PureComponent {
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
    this.intervalId = setInterval(() => this.fetchData, INTERVAL * 60000)
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
      <div>
        <div>
          {
            data.map(line => <TubeLineInfo line={line} key={line.id} />)
          }
        </div>
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
      </div>
    )
  }
}

export default TubeStatusView
