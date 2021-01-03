import React, { PureComponent } from 'react'
import styled from 'styled-components'

/**
 * 特點
 *  1.props穿透(獲取標籤上的屬性)，包括所有被
 *  2.attr給予屬性標籤
 *  
 */

const HYInput = styled.input.attrs({ //傳入屬性
  placeholder: 'coderwhy',
  bcolor: 'red',
})`
  background-color: lightblue;
  border-color: ${props => props.bcolor };
  color: ${props => props.opp};
`

export default class Profile extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      color: '#c02ac0'
    }
  }
  render() {
    return (
      <div className="profile">
        <HYInput type="password" color={this.state.color} opp={this.state.color}/>
        <h2>我是profile的標題</h2>
        <ul className="setting">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    )
  }
}
