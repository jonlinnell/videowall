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

  top: 54px;

  display: flex;
  flex-direction: column;
  align-content: center;

  text-align: center;

  color: white;
  font-family: "DIN Light";
`

const DayOfMonth = styled.p`
  font-family: "DIN Light";
  font-size: 72px;
  margin: 0;
`

const Month = styled.p`
  font-family: "DIN Regular";
  position: relative;
  top: -24px;
  font-size: 32px;
  text-transform: uppercase;
  margin: 0;
`

const EventWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
  margin-left: 24px;
`

const EventTitle = styled.p`
  margin: 0;
  font-size: 48px;
  color: white;
  font-family: "DIN Light";
  padding-left: 2rem;
  max-lines: 2;
  text-overflow: ellipsis;
`

const EventDate = styled.p`
  margin: 0;
  font-size: 32px;
  color: white;
  font-family: "DIN Light";
  padding-left: 2rem;
`

const EventLocation = styled.p`
  margin: 0;
  font-size: 24px;
  color: rgb(230, 230, 230);
  font-family: "DIN Light";
  padding-left: 2rem;
`

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
`

const Calendar = ({ date }) => (
  <CalendarWrapper>
    <CalendarIcon width={200} />
    <Date>
      <DayOfMonth>{moment(date).format('D')}</DayOfMonth>
      <Month>{moment(date).format('MMM')}</Month>
    </Date>
  </CalendarWrapper>
)

const Event = ({
  event: {
    title,
    displayDate,
    coercedDate,
    location,
  },
}) => (
  <EventWrapper>
    <Calendar date={coercedDate} />
    <EventDetails>
      <EventTitle>{title}</EventTitle>
      <EventDate>{displayDate}</EventDate>
      <EventLocation>{location}</EventLocation>
    </EventDetails>
  </EventWrapper>
)

export default Event
