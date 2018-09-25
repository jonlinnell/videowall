import { PureComponent } from 'react'
import axios from 'axios'

import { api } from '../../config.json'

class Screen extends PureComponent {
  constructor() {
    super()

    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.loadData(), 60 * 1000)
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
