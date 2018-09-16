import React from 'react'
import styled from 'styled-components'

const Title = styled.p`
  margin-top: 0;
  font-size: 2rem;
  color: white;
  font-family: "DIN Light";
`

const Date = styled.p`
  margin-top: 0;
  font-size: 0.8rem;
  color: rgb(200, 200, 200);
  font-family: "DIN Light";
`

const NewsItem = ({ item }) => {
  const { title, pubDate } = item

  return (
    <div>
      <Title>{title}</Title>
      <Date>{pubDate}</Date>
    </div>
  )
}

export default NewsItem
