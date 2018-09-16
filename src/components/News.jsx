import React from 'react'

import NewsItem from './NewsItem'

import Title from './Title'
import MoreInfo from './MoreInfo'
import ScreenContentWrapper from './ScreenContentWrapper'

const News = ({ items }) => (
  <ScreenContentWrapper>
    <Title>In the news</Title>
    {
      items.slice(0, 4).map(item => <NewsItem key={item.guid} item={item} />)
    }
    <MoreInfo>Find out more, visit lborolondon.ac.uk/News</MoreInfo>
  </ScreenContentWrapper>
)

export default News
