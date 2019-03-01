import React from 'react'

import BGPatternWrapper from './BGPatternWrapper'
import BGContentWrapper from './BGContentWrapper'
import BGColourWrapper from './BGColourWrapper'

const Background = ({ children }) => (
  <BGPatternWrapper>
    <BGColourWrapper>
      <BGContentWrapper>
        { children }
      </BGContentWrapper>
    </BGColourWrapper>
  </BGPatternWrapper>
)

export default Background
