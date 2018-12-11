import React, {Component} from 'react'

class Keypad extends Component {
  render() {
    return (
      <input type='password' onKeyUp={this.handleEvent}/>
    )
  }

  handleEvent = () => {
    console.log('Entering password...')
  }
}

export default Keypad
