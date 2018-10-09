import React, { PureComponent } from 'react'
import { Parallax } from 'react-spring'

import FeedContainer from '../FeedContainer'
import News from './News'
import NewsItem from './NewsItem'
import HeadlineItem from './HeadlineItem'

const INTERVAL = 25

class NewsScroller extends PureComponent {
  constructor(props) {
    super(props)
    this.parallaxContainer = React.createRef()

    this.state = { page: 0 }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.scroll(), INTERVAL * 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  intervalId = null

  scroll = () => {
    const { page } = this.state

    this.setState({ page: page === 1 ? 0 : 1 }, () =>
      this.parallaxContainer.current.scrollTo(this.state.page))
  }

  render() {
    return (
      <Parallax ref={this.parallaxContainer} pages={2} horizontal scrolling={false}>
        <FeedContainer
          render={News}
          renderItem={HeadlineItem}
          endpoint="headlines"
          interval={60}
          title="World Headlines"
          moreInfo={null}
          offset={1}
        />
        <FeedContainer
          render={News}
          renderItem={NewsItem}
          endpoint="uniNews"
          interval={120}
          title="University news"
          moreInfo="To find out more, visit lborolondon.ac.uk/news"
          offset={0}
        />
      </Parallax>
    )
  }
}

export default NewsScroller
