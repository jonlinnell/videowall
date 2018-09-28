import React from 'react'

import NewsItem from './NewsItem'

import Title from '../Title'
import MoreInfo from '../MoreInfo'
import ScreenContentWrapper from '../ScreenContentWrapper'

const News = ({ items, title }) => (
  <ScreenContentWrapper>
    <Title>{title}</Title>
    {
      items.slice(0, 4).map(item => <NewsItem key={item.guid} item={item} />)
    }
    <MoreInfo>To find out more, visit lborolondon.ac.uk/news</MoreInfo>
  </ScreenContentWrapper>
)

export default News
