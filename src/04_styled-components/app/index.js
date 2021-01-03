import React, { PureComponent } from 'react'

import Home from '../home'
import Profile from '../profile'
import styled, { ThemeProvider } from 'styled-components'

const HYButton = styled.button`
  padding: 10px 20px;
  border-color: red;
  color: red;
`
// const HYPrimaryButton = styled.button`
//   padding: 10px 20px;
//   border-color: red;
//   color: #fff;
//   background-color: blue;
// `

const HYPrimaryButton = styled(HYButton)`
  color: #fff;
  background-color: blue;
`

export default class App extends PureComponent {
  render() {
    return (
      // 共享主題
      <ThemeProvider theme={{themeColor: "blue", fontSize: "30px"}}>
        <h2>app標題</h2> 
        <Home/>
        <hr/>
        <Profile/>
        <HYButton>我是普通的按鈕</HYButton>
        <HYPrimaryButton>我是主要的按鈕</HYPrimaryButton>
      </ThemeProvider>
    )
  }
}

// 需要結合內聯樣式達到動態綁定
// 不能使用連接符 .home-title
// 必須要用style.title的方式寫