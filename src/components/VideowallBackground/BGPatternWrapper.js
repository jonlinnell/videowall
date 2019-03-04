import styled from 'styled-components'

import bg from '../../images/bg_pattern_transparency.png'

const BGPatternWrapper = styled.div`
  height: 100%;
  width: 100%;

  background-image: ${({ hidePattern }) => (hidePattern ? 'none' : `url(${bg})`)};
  background-size: cover;

  overflow: hidden;
`

export default BGPatternWrapper
