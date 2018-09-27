import React from 'react'
import styled from 'styled-components'

import colours from './colours.json'

const LineContainer = styled.div`
  border-radius: 6px;
  margin: 6px 0;
  padding: 12px;

  font-family: "DIN Light";

  background-color: ${({ id }) => colours[id].background};
  color: ${({ id }) => colours[id].text};

  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`

const LineName = styled.h4`
  margin: 0;
  font-size: 1.2rem;
`

const LineStatus = styled.p`
  margin: 0;
  font-size: 0.9rem;
`

const TubeLineInfo = ({ line: { id, name, lineStatuses } }) => (
  <LineContainer id={id}>
    <LineName>{name}</LineName>
    <LineStatus>
      {
        lineStatuses
          .map(status => status.statusSeverityDescription)
          .filter((v, i, a) => a.indexOf(v) === i) // Unique strings only
          .join(', ')
      }
    </LineStatus>
  </LineContainer>
)

export default TubeLineInfo
