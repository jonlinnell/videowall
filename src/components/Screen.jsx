import { PureComponent } from 'react'
import Parser from 'rss-parser'

class Screen extends PureComponent {
  constructor() {
    super()

    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    setInterval(this.loadData(), 60 * 1000)
  }

  loadData() {
    const parser = new Parser()
    parser.parseURL(`https://cors-anywhere.herokuapp.com/${this.props.feed}`, (err, feed) => {
      if (err) throw new Error(err)

      this.setState({ items: feed.items })
    })
  }

  render() {
    const { items } = this.state

    return this.props.render({ items })
  }
}

export default Screen
