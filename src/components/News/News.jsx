import React from 'react'

import generateKey from '../../lib/generateKey'

import Title from '../Title'
import MoreInfo from '../MoreInfo'
import ScreenContentWrapper from '../ScreenContentWrapper'

const News = ({
  items,
  title,
  moreInfo,
  renderItem,
}) => (
  <ScreenContentWrapper>
    <Title>{title}</Title>
    {
      items.slice(0, 7).map(item => renderItem({ key: generateKey(item), item }))
    }
    <MoreInfo>{moreInfo}</MoreInfo>
  </ScreenContentWrapper>
)

export default News
