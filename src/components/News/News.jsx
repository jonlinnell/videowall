import React from 'react'

import NewsItem from './NewsItem'

import Title from '../Title'
import MoreInfo from '../MoreInfo'
import ScreenContentWrapper from '../ScreenContentWrapper'

const News = ({ items, title, moreInfo }) => (
  <ScreenContentWrapper>
    <Title>{title}</Title>
    {
      items.slice(0, 7).map(item => <NewsItem key={item.guid} item={item} />)
    }
    <MoreInfo>{moreInfo}</MoreInfo>
  </ScreenContentWrapper>
)

export default News
