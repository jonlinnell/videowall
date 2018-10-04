import React from 'react'
import styled from 'styled-components'

const IconTick = styled.svg`
  fill: ${({ id, theme }) => theme.lines[id].text};
`

export default props => (
  <IconTick xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </IconTick>
)
