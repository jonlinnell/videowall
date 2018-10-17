import React from 'react'
import styled from 'styled-components'

const Error = styled.div`
  ${({ fill }) => (fill ? 'width: 100%;' : null)}

  background-color: rgba(255, 255, 255, 0.1);

  padding: 24px;
`

const ErrorTitle = styled.h4`
  font-family: 'DIN Light';
  font-size: 24px;
  color: white;
`

const ErrorMessage = styled.p`
  font-family: 'DIN Light';
  font-size: 18px;
  color: white;
`

const generateHumanReadableError = (error) => {
  if (!error.status) {
    return ('It looks like there\'s something wrong with the internet connection.')
  }

  return ('That\'s about all we know.')
}

export default ({ error, callerDescription }) => (
  <Error>
    <ErrorTitle>There was a problem loading { callerDescription }</ErrorTitle>
    <ErrorMessage>{ generateHumanReadableError(error) }</ErrorMessage>
  </Error>
)
