import React, { PureComponent } from 'react'
import styled from 'styled-components'

const Screen3x3Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 3240px;
  width: 5760px;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`

export default class Screen3x3 extends PureComponent {
  render() {
    return (
      <Screen3x3Wrapper>
        {
          this.props.render()
        }
      </Screen3x3Wrapper>
    )
  }
}
