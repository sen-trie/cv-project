import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div className='Header flex-row'>
        <p>CV Maker</p>
      </div>
    );
  }
}

export default Header;