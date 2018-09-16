import React from 'react'

import NewsItem from './NewsItem'

import Title from './Title'

const News = ({ items }) => (
  <div>
    <Title>In the news</Title>
    {
      items.slice(0, 4).map(item => <NewsItem key={item.guid} item={item} />)
    }
  </div>
)

export default News
