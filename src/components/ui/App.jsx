import React from 'react'

import NewsBoard from '../containers/news/NewsBoard'
import Travel from '../ui/Travel/Travel'

const App = () =>
  <div>
    <div id='scr3x3'>3x3</div>
    <div id='scr4_1'>4_1</div>
    <div id='scr4_2'><Travel /></div>
    <div id='scr4_3'><NewsBoard /></div>
  </div>

export default App
