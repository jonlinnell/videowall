import React from 'react'

import NewsItem from './NewsItem'

const News = ({ items }) => (
  <div>
    {
      items.slice(0, 4).map(item => <NewsItem key={item.guid} item={item} />)
    }
  </div>
)

export default News
