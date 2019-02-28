import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import Videowall from './routes/Videowall'

import GlobalStyle from './style/GlobalStyle'

import theme from './style/theme.json'

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <Videowall />
    </React.Fragment>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
