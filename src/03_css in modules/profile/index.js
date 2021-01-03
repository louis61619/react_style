import React, { PureComponent } from 'react'

import profileStyle from './style.module.css'

export default class Profile extends PureComponent {
  render() {
    return (
      <div className="profile">
        <h2 className={profileStyle.title}>我是profile的標題</h2>
        <ul className="setting">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    )
  }
}
