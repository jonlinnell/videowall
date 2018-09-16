import React from 'react'
import styled from 'styled-components'

import News from './News'
import Events from './Events'

import Screen from './Screen'

const Screen3x3 = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 3240px;
  width: 5760px;

  outline: 1px solid white;
`

const Screen1080 = styled.div`
  position: absolute;
  top: ${props => props.topOffset * 1080}px;
  left: 5761px;

  height: 1032px;
  width: 1872px;

  padding: 24px;

  outline: 1px solid white;

  overflow: hidden;
`

const ViewMain = () => (
  <div>
    <Screen3x3><p>I am some text</p></Screen3x3>
    <Screen1080 topOffset={0}><Screen render={News} feed="http://www.lborolondon.ac.uk/rss/news.xml" /></Screen1080>
    <Screen1080 topOffset={1}><Screen render={Events} feed="http://www.lborolondon.ac.uk/rss/events.xml" /></Screen1080>
    <Screen1080 topOffset={2}><p>I am a bottom screen</p></Screen1080>
  </div>
)

export default ViewMain
