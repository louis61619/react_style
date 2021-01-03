import React, { PureComponent } from 'react'

export default class App extends PureComponent { 
  constructor(props) {
    super(props)
    this.state = {
      color: "purple"
    }
  }
  render() {
    const pStyle = {
      color: this.state.color,
      textDecoration: "underline"
    }
    return (
      <div>
        <h2 style={{"font-size": '50px', 'color': "red"}}>我是標題</h2>
        <p style={pStyle}>我是文字敘述</p>
      </div>
    )
  }
}

// 寫法上都需要使用駝峰
// 樣式沒有提示
// 某些樣式無法編寫 EX: 偽元素