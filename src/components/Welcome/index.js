import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  changeButton = () => {
    const {isSubscribed} = this.state
    if (isSubscribed) {
      this.setState({isSubscribed: false})
    } else {
      this.setState({isSubscribed: true})
    }
  }

  render() {
    const {isSubscribed} = this.state
    let subscribeBtn
    if (isSubscribed) {
      subscribeBtn = (
        <button className="button" type="button" onClick={this.changeButton}>
          Subscribe
        </button>
      )
    } else {
      subscribeBtn = (
        <button className="button" type="button" onClick={this.changeButton}>
          Subscribed
        </button>
      )
    }
    return (
      <div className="bg-container">
        <div className="welcome-container">
          <h1 className="title">Welcome</h1>
          <h1 className="text">Thank you! Happy Learning!</h1>
          {subscribeBtn}
        </div>
      </div>
    )
  }
}

export default Welcome
