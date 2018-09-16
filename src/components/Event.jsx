import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import CalendarIcon from './CalendarIcon'

const CalendarWrapper = styled.div`
  position: relative;
`

const Date = styled.div`
  position: absolute;
  width: 200px;

  top: 60px;

  display: flex;
  flex-direction: column;
  align-content: center;

  text-align: center;

  color: white;
  font-family: "DIN Light";
`

const DayOfMonth = styled.p`
  font-family: "DIN Light";
  font-size: 4rem;
  margin: 0;
`

const Month = styled.p`
  font-family: "DIN Regular";
  position: relative;
  top: -12px;
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 0;
`

const EventWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const EventTitle = styled.p`
  margin: 0;
  font-size: 2rem;
  color: white;
  font-family: "DIN Light";
  padding-left: 2rem;
`

const Calendar = ({ date }) => (
  <CalendarWrapper>
    <CalendarIcon width={200} />
    <Date>
      <DayOfMonth>{moment(date).format('Do')}</DayOfMonth>
      <Month>{moment(date).format('MMM')}</Month>
    </Date>
  </CalendarWrapper>
)

const Event = ({ event: { title, date } }) => (
  <EventWrapper>
    <Calendar date={date} />
    <EventTitle>{title}</EventTitle>
  </EventWrapper>
)

export default Event
