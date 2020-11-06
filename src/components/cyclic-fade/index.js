import raf from 'raf'
import React, { Component } from 'react'
import './index.sass'

class CyclicFade extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      paused: false
    };
  }

  onMouseClick = (e) => {
    e.preventDefault()
    let { index } = this.state
    const { children } = this.props
    index++
    index %= children.length
    this.setState({index: index})
  }

  render() {
    const { children } = this.props;
    const { index } = this.state;
    return (
        <div className="cyclic-fade-container" onClick={this.onMouseClick} aria-hidden="true">
            {children.map((each, key) => (
              <div key={key} className={`cyclic-fade-child ${key === index ? 'active' : ''}`} aria-hidden="true">
                {each}
              </div>
            ))}
          </div>
    )
  }

}

export default CyclicFade;
