import React from 'react'

import generateKey from '../../lib/generateKey'

import NewsItem from './NewsItem'

import Title from '../Title'
import MoreInfo from '../MoreInfo'
import ScreenContentWrapper from '../ScreenContentWrapper'

const News = ({ items, title, moreInfo }) => (
  <ScreenContentWrapper>
    <Title>{title}</Title>
    {
      items.slice(0, 7).map(item => <NewsItem key={generateKey(item)} item={item} />)
    }
    <MoreInfo>{moreInfo}</MoreInfo>
  </ScreenContentWrapper>
)

export default News
