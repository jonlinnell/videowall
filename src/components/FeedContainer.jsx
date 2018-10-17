import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import axios from 'axios'

import Error from './Error'

import { api } from '../../config.json'

class FeedContainer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      hasError: false,
      error: null,
    }
  }

  componentDidMount() {
    this.loadData()
    this.intervalId = setInterval(() => this.loadData(), this.props.interval * 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  intervalId = null

  loadData() {
    const { endpoint } = this.props

    axios.get(`${api}/${endpoint}`)
      .then(response => this.setState({
        items: response.data,
        hasError: false,
        error: null,
      }))
      .catch(error => this.setState({
        hasError: true,
        error,
      }))
  }

  render() {
    const { items, error, hasError } = this.state

    if (hasError) {
      return (
        <Error
          error={error}
          callerDescription={`the data from ${this.props.endpoint}`}
        />
      )
    }

    return this.props.render({ items, ...this.props })
  }
}

FeedContainer.propTypes = {
  interval: propTypes.number.isRequired,
  endpoint: propTypes.string.isRequired,
  render: propTypes.func.isRequired,
}

export default FeedContainer
