import React, { PureComponent } from 'react'

import {
  HomeWrapper,
  TitleWrapper
} from './style'

export default class index extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <TitleWrapper>我是home的標題</TitleWrapper>
        <div className="banner">
          <span>輪播圖1</span>
          <span className={true? "active": ""}>輪播圖2</span>
          <span>輪播圖3</span>
          <span>輪播圖4</span>
        </div>
      </HomeWrapper>
    )
  }
}
