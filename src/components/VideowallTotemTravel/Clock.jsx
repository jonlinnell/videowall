import React, { PureComponent } from 'react'
import styled from 'styled-components'
import moment from 'moment'

const StyledClock = styled.div`
  font-family: 'DIN Regular';
  font-size: 24px;
  color: white;
`

export default class Clock extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      time: Date.now(),
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.updateTime(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  intervalID = null

  updateTime = () => this.setState({ time: Date.now() })

  render() {
    return (
      <StyledClock>{ moment(this.state.time).format('dddd, MMM Do YYYY, h:mm:ss a') }</StyledClock>
    )
  }
}
