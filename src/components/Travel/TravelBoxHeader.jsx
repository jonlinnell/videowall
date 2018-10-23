import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  padding: 12px 24px;

  font-family: 'DIN Light';
  color: white;
`

const HeaderTop = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;

  align-content: start;
  align-items: center;
`

const Subtitle = styled.p`
  font-size: 18px;
  font-family: 'DIN Extlight';

  padding: 0;
  margin: 0;
`

const Title = styled.h4`
  font-family: 'DIN Light';
  font-size: 28px;

  margin: 0;
`

export default ({ title, subtitle, icon }) => {
  const Icon = styled(icon)`
    margin-left: auto;
    fill: white;
    stroke: white;
  `

  return (
    <Header>
      <HeaderTop>
        <Title>{ title }</Title>
        <Icon width={32} />
      </HeaderTop>
      {
        subtitle
          ? <Subtitle>{ subtitle }</Subtitle>
          : null
      }
    </Header>
  )
}
