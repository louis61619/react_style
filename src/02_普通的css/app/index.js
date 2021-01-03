import React, { PureComponent } from 'react'

import "./sytle.css"

import Home from '../home'
import Profile from '../profile'

export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        <h2 className="title">app標題</h2> 
        <Home/>
        <Profile/>
      </div>
    )
  }
}
