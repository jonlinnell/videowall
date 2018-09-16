import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const ItemTitle = styled.p`
  margin: 0;
  font-size: 2rem;
  color: white;
  font-family: "DIN Light";
`

const Date = styled.p`
  margin-top: 12px;
  margin-bottom: 32px;
  font-size: 0.8rem;
  color: rgb(200, 200, 200);
  font-family: "DIN Light";
`

const NewsItem = ({ item }) => {
  const { title, pubDate } = item

  return (
    <div>
      <ItemTitle>{title}</ItemTitle>
      <Date>{moment(pubDate).format('Do MMM YY')}</Date>
    </div>
  )
}

export default NewsItem
