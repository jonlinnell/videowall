import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const ItemTitle = styled.p`
  margin: 0;
  font-size: 42px;
  color: white;
  font-family: "DIN Light";
  max-lines: 2;
`

const Date = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 24px;
  color: rgb(200, 200, 200);
  font-family: "DIN Light";
`

const NewsItem = ({ item, key }) => {
  const { title, pubDate } = item

  return (
    <div key={key}>
      <ItemTitle>{title}</ItemTitle>
      <Date>{moment(pubDate).format('D MMMM YYYY')}</Date>
    </div>
  )
}

export default NewsItem
