import React, { PureComponent } from 'react'

import "./style.css"

export default class index extends PureComponent {
  render() {
    return (
      <div className="home">
        <h2 className="title">我是home的標題</h2>
        <div className="banner">
        <span>輪播圖</span>
        </div>
      </div>
    )
  }
}
