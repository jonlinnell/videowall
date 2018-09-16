import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Parser from 'rss-parser'

import NewsItem from './NewsItem'

const ScreenTitle = styled.h1`
  color: white;
  font-size: 3rem;
`

class ScreenNews extends PureComponent {
  constructor() {
    super()

    this.state = {
      newsItems: [],
    }
  }

  componentDidMount() {
    setInterval(this.loadData(), 120000)
  }

  loadData() {
    const parser = new Parser()
    parser.parseURL('https://cors-anywhere.herokuapp.com/http://www.lborolondon.ac.uk/rss/news.xml', (err, feed) => {
      if (err) throw new Error(err)

      this.setState({ newsItems: feed.items })
    })
  }

  render() {
    const { newsItems } = this.state

    return (
      <div>
        <ScreenTitle>In the News</ScreenTitle>
        {
          newsItems.slice(0, 4).map(item => <NewsItem key={item.guid} item={item} />)
        }
      </div>
    )
  }
}

export default ScreenNews
