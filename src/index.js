import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'

import ViewMain from './components/ViewMain'

import './index.scss'

import injectFonts from './fonts/importFontsMessy'

/* eslint-disable-next-line no-unused-expressions */
injectGlobal`
  ${injectFonts()}

  html, body {
    background-color: rgb(183, 0, 98);
  }

  *, *:after, *:before {
    box-size: inherit;
  }
`

const App = () => <ViewMain />

ReactDOM.render(<App />, document.getElementById('root'))
