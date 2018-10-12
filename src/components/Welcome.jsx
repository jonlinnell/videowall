import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-spring'

const Accolades = styled.div`
  text-align: center;
`

const WelcomeText = styled.p`
  font-size: ${({ large }) => (large ? '17rem' : '11rem')};
  margin: 0;
  font-family: 'DIN Extlight';
  text-align: center;
  color: rgb(255, 255, 255);
`

class Welcome extends PureComponent {
  constructor(props) {
    super(props)

    this.parallaxRef = React.createRef()

    this.state = {
      page: 0,
    }
  }

  componentDidMount() {
    this.scrollInterval = setInterval(() => this.scroll(), 4000)
  }

  componentWillUnmount() {
    clearInterval(this.scrollInterval)
  }

  scrollInterval = null

  scroll() {
    this.setState({ page: this.state.page === 1 ? 0 : 1 }, () => {
      this.parallaxRef.current.scrollTo(this.state.page)
    })
  }

  render() {
    return (
      <React.Fragment>
        <WelcomeText>Welcome to</WelcomeText>
        <WelcomeText large>Loughborough University London</WelcomeText>
        <Accolades>
          <Parallax ref={this.parallaxRef} pages={1}>
            <Parallax.Layer offset={0}>
              <p>Test 1</p>
            </Parallax.Layer>
            <Parallax.Layer offset={0}>
              <p>Test 2</p>
            </Parallax.Layer>
            <Parallax.Layer offset={0}>
              <p>Test 3</p>
            </Parallax.Layer>
            <Parallax.Layer offset={1}>
              <p>Test 4</p>
            </Parallax.Layer>
            <Parallax.Layer offset={1}>
              <p>Test 5</p>
            </Parallax.Layer>
            <Parallax.Layer offset={1}>
              <p>Test 6</p>
            </Parallax.Layer>
          </Parallax>
        </Accolades>
      </React.Fragment>
    )
  }
}

export default Welcome
