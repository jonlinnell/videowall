import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Screen from '../Screen'
import ScreenContentWrapper from '../ScreenContentWrapper'
import Headlines from './Headlines'

import { api } from '../../../config.json'

const NewsScreen = () => {
  console.log('hup')
  const feeds = [
    {
      title: 'World Headlines',
      moreInfo: '',
      url: `${api}/headlines`,
      interval: 60 * 1000 * 15, // 15 minutes
    },
    {
      title: 'Loughborough University News',
      moreInfo: 'For more information, go to lboro.ac.uk/news',
      url: `${api}/uniNews`,
      interval: 60 * 1000 * 60, // 1 hour
    },
  ]

  const [feedData, setFeedData] = useState([])
  const [currentFeed, setCurrentFeed] = useState(0)

  const fetchFeed = async () => {
    const response = await axios.get(feeds[0].url)

    if (!response) {
      console.error('No response.')
    } else if (!response.data) {
      console.error('No data.')
    } else {
      console.log('updating!')
      setFeedData(response.data)
    }
  }

  useEffect(() => {
    fetchFeed()
    console.log(feedData)
  }, [])

  return (
    <Screen>
      <ScreenContentWrapper>
        {feedData.length > 0 ? (
          <Headlines
            title={feeds[currentFeed].title}
            moreInfo={feeds[currentFeed].moreInfo}
            newsItems={feedData}
          />
        ) : <span>No news</span>}
      </ScreenContentWrapper>
    </Screen>
  )
}

export default NewsScreen
