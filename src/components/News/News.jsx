import React from 'react'
import { Parallax } from 'react-spring'
import styled from 'styled-components'

import generateKey from '../../lib/generateKey'

import Title from '../Title'
import MoreInfo from '../MoreInfo'

const ItemsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 120px;

  & > div {
    position: initial !important;
  }
`

const News = ({
  items,
  title,
  moreInfo,
  renderItem,
  offset,
}) => (
  <React.Fragment>
    <Parallax.Layer offset={offset} speed={0.1}>
      <Title>{title}</Title>
    </Parallax.Layer>
    <ItemsContainer>
      {
        items.slice(0, 7).map((item, index) => (
          <Parallax.Layer offset={offset} speed={(0.3 + (index / 20))}>
            {renderItem({ key: generateKey(item), offset, item })}
          </Parallax.Layer>
        ))
      }
      <MoreInfo>{moreInfo}</MoreInfo>
    </ItemsContainer>
  </React.Fragment>
)

export default News
