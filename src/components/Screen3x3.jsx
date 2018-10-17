import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Welcome from './Welcome'
import Error from './Error'

import { api } from '../../config.json'

const INTERVAL = 1 // in minutes

const Screen3x3Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 3240px;
  width: 5760px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export default class Screen3x3 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
      error: null,
    }
  }

  componentWillMount() {
    this.fetchData()
    this.intervalId = setInterval(() => this.fetchData(), INTERVAL * 60000)
  }

  fetchData() {
    axios.get(`${api}/update3x3`)
      .then(({ data: { content, contentType } }) => this.setState({
        hasError: false,
        error: null,
        contentType,
        content,
      }))
      .catch(error => this.setState({
        hasError: true,
        error,
      }))
  }

  intervalId = null

  render() {
    const {
      hasError,
      error,
      contentType,
      content,
    } = this.state

    if (hasError) {
      return (
        <Screen3x3Wrapper>
          <Error fill error={error} />
        </Screen3x3Wrapper>
      )
    }

    let items
    if (contentType === 'image') {
      items = <img alt="3x3 content" src={`data:image/png;base64,${content}`} />
    } else if (contentType === 'youtube') {
      items = (
        <iframe
          width="5760"
          height="3240"
          title="Video content"
          src={`https://www.youtube.com/embed/${content}?rel=0&autoplay=1&loop=1&mute=1&controls=0&playlist=${content}`}
          frameBorder={false}
        />
      )
    } else {
      items = <Welcome />
    }

    return (
      <Screen3x3Wrapper>
        {items}
      </Screen3x3Wrapper>
    )
  }
}
