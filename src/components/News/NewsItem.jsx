import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const ItemTitle = styled.p`
  margin: 0;
  font-size: 2.2rem;
  color: white;
  font-family: "DIN Light";
  max-lines: 2;
`

const Date = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 1rem;
  color: rgb(200, 200, 200);
  font-family: "DIN Light";
`

const NewsItem = ({ item }) => {
  const { title, pubDate } = item

  return (
    <div>
      <ItemTitle>{title}</ItemTitle>
      <Date>{moment(pubDate).format('D MMMM YYYY')}</Date>
    </div>
  )
}

export default NewsItem
