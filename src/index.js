import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from '@reach/router'

import Videowall from './views/Videowall'
import KioskInward from './views/KioskInward'
import KioskOutward from './views/KioskOutward'

import GlobalStyle from './style/GlobalStyle'

import theme from './style/theme.json'

const Splat = () => (
  <h1>
    If you&apos;re seeing this, then you need to include the name of the screen after the /, e.g.
    host:5000/kiosk_outward
  </h1>
)

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <Videowall path="/videowall" />
        <KioskInward path="/kiosk_inward" />
        <KioskOutward path="/kiosk_outward" />
        <Splat path="/" />
      </Router>
    </React.Fragment>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
