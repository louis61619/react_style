import React, { PureComponent } from 'react'

import homeStyle from './style.module.css'

export default class index extends PureComponent {
  render() {
    return (
      <div className="home">
        <h2 className={homeStyle.title}>我是home的標題</h2>
        <div className={homeStyle.banner}>
          <span>輪播圖</span>
        </div>
      </div>
    )
  }
}
