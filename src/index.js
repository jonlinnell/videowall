import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'

import ViewMain from './components/ViewMain'

import injectFonts from './fonts/importFontsMessy'

/* eslint-disable-next-line no-unused-expressions */
injectGlobal`
  *, *:after, *:before {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
  }

  ${injectFonts()}
`

const App = () => <ViewMain />

ReactDOM.render(<App />, document.getElementById('root'))
