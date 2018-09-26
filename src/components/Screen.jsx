import { PureComponent } from 'react'
import propTypes from 'prop-types'
import axios from 'axios'

import { api } from '../../config.json'

class Screen extends PureComponent {
  propTypes = {
    interval: propTypes.number.isRequired,
    endpoint: propTypes.string.isRequired,
    render: propTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.loadData(), this.props.interval * 1000)
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

    return this.props.render({ items })
  }
}

export default Screen
