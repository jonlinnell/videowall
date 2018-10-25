import styled from 'styled-components'

const Screen1080 = styled.div`
  height: ${({ portrait }) => (portrait ? 1920 : 1080)}px;
  width: ${({ portrait }) => (portrait ? 1080 : 1920)}px;

  padding: ${({ noPadding, theme }) => (noPadding ? '0' : `${theme.screenPadding}px`)};

  overflow: hidden;
`

export default Screen1080
