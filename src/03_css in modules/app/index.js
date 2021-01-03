import React, { PureComponent } from 'react'

import appStyle from './sytle.module.css'

import Home from '../home'
import Profile from '../profile'

export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        <h2 className={appStyle.title}>app標題</h2> 
        <Home/>
        <hr/>
        <Profile/>
      </div>
    )
  }
}

// 需要結合內聯樣式達到動態綁定
// 不能使用連接符 .home-title
// 必須要用style.title的方式寫