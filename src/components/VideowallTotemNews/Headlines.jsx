import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import Title from '../Title'
import MoreInfo from '../MoreInfo'

const HeadlineList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const Headline = styled.h5`
  font-family: 'DIN Light';
  color: white;
`

const PosedTitle = posed(Title)({
  enter: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -100,
  },
})

const PosedItem = posed.li({
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 10,
  },
})

const PosedList = posed(HeadlineList)({
  enter: {
    delayChildren: 500,
    staggerChildren: 50,
  },
  exit: {
    staggerChildren: 100,
  },
})

const Headlines = ({ title, moreInfo, newsItems }) => {
  const [newsElements, setNewsElements] = useState([])

  useEffect(() => {
    setNewsElements(newsItems.map(newsItem => (
      <PosedItem key={newsItem.title}>
        <Headline>{newsItem.title}</Headline>
      </PosedItem>
    )))
  }, [])

  return (
    <div>
      <PosedTitle pose={newsElements.length > 0 ? 'enter' : 'exit'}>{title}</PosedTitle>
      <PosedList pose={newsElements.length > 0 ? 'enter' : 'exit'}>
        <PoseGroup>{newsElements}</PoseGroup>
      </PosedList>
      <MoreInfo>{moreInfo}</MoreInfo>
    </div>
  )
}

export default Headlines
