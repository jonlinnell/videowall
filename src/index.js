import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import ViewMain from './components/ViewMain'

import injectFonts from './fonts/importFontsMessy'

import theme from './theme.json'

/* eslint-disable-next-line no-unused-expressions */
injectGlobal`
  html {
    font-size: 12px;
    box-sizing: border-box;
  }

  *, *:after, *:before {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
  }

  ${injectFonts()}
`

const App = () => (
  <ThemeProvider theme={theme}>
    <ViewMain />
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
