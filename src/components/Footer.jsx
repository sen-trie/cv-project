import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div className='Footer flex-row'>
        <p>Made by <a href='https://github.com/bobbaID'>BobbaID</a></p>
      </div>
    );
  }
}

export default Footer;