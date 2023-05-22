import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div className='Sidebar flex-column'>
        <p>Customize your CV!</p>
        <button type='submit'>Toggle</button>
        <p>Options</p>
        <p>Notes</p>
        <p>Notes</p>

        <p>Notes</p>
        <p>Notes</p> <p>Notes</p>
        <p>Notes</p>
        <p>Notes</p>
        <p>Notes</p>
        <p>Notes</p>
        <p>Notes</p>

        <p>Notes</p> <p>Notes</p>
          
      </div>
    );
  }
}

export default Sidebar;