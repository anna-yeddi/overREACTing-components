import React from 'react'

export class LikeBtnClassBased extends React.Component {
  static propTypes = {}

  // // Option 1 - bind:
  // constructor(props) {
  //   super(props)
  //   this.clicks = 0
  //   this.handleClick = this.handleClick.bind(this)
  // }

  // handleClick = (evt) => {
  //   console.log(evt, this.clicks)
  // }
  // render() {
  //   return <button onClick={this.handleClick}>Click me (Class-bind): 0</button>
  // }

  // // Option 2:
  // constructor(props) {
  //   super(props)
  //   this.state = { clicks: 0 }
  // }

  // handleClick = (evt) => {
  //   console.log(evt, this.clicks)
  // }

  // render() {
  //   return <button onClick={this.handleClick}>Click me (Class-new): 0</button>
  // }

  // Option 3:

  state = { clicks: 0 }

  constructor(props) {
    super(props)
  }

  handleClick = (evt) => {
    console.log(evt, this.clicks)
  }

  render() {
    return (
      <button onClick={(evt) => this.handleClick(evt)}>
        Click me (Class-arrow): 0
      </button>
    )
  }
}

export default LikeBtnClassBased
