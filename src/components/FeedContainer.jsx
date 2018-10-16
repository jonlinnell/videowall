import { PureComponent } from 'react'
import propTypes from 'prop-types'
import axios from 'axios'

import { api } from '../../config.json'

class FeedContainer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
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
      .then(response => this.setState({ items: response.data }))
      .catch(error => console.error(error))
  }

  render() {
    const { items } = this.state

    return this.props.render({ items, ...this.props })
  }
}

FeedContainer.propTypes = {
  interval: propTypes.number.isRequired,
  endpoint: propTypes.string.isRequired,
  render: propTypes.func.isRequired,
}

export default FeedContainer
