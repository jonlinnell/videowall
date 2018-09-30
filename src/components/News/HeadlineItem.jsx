import React from 'react'
import styled from 'styled-components'

const ItemTitle = styled.p`
  margin: 0;
  font-size: 2.2rem;
  color: white;
  font-family: "DIN Light";
  max-lines: 1;
`

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 1.5rem;
  color: rgb(220, 220, 220);
  font-family: "DIN Light";
  max-lines: 2;
`

const headlineItem = ({ item, key }) => {
  const { title, description, source: { name } } = item

  return (
    <div key={key}>
      <ItemTitle>{title}</ItemTitle>
      <Description>{`${description || ''} (${name})`}</Description>
    </div>
  )
}

export default headlineItem
