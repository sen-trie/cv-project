import React, { Component } from 'react';

class Sidebar extends Component {
  handleTopColorChange = (event) => {
    const color = event.target.value;
    this.props.handleTopColorChange(color);
  };

  handleTopTextChange = (event) => {
    const color = event.target.value;
    this.props.handleTopTextChange(color);
  };

  handleBottomColorChange = (event) => {
    const color = event.target.value;
    this.props.handleBottomColorChange(color);
  };

  handleBottomTextChange = (event) => {
    const color = event.target.value;
    this.props.handleBottomTextChange(color);
  };

  render() {
    return (
      <div className='Sidebar flex-column'>
        <p>Customize your CV!</p>
        <button type='submit' onClick={this.props.toggleVisibility}> {this.props.isVisible ? 'Preview' : 'Edit'} </button>
        <p>Options</p>
        <div className='flex-row'>
          <label htmlFor="topBGColor" style={{ marginRight: '1rem' }}>Heading BG Color</label>
          <input type="color" name='topBGColor' onChange={this.handleTopColorChange} defaultValue='#66AFBF'></input>
        </div>
        <div className='flex-row'>
          <label htmlFor="topTextColor" style={{ marginRight: '1rem' }}>Heading Text Color</label>
          <input type="color" name='topTextColor' onChange={this.handleTopTextChange} defaultValue='#F2F2F3'></input>
        </div>
        <div className='flex-row'>
          <label htmlFor="bottomBGColor" style={{ marginRight: '1rem' }}>Body BG Color</label>
          <input type="color" name='bottomBGColor' onChange={this.handleBottomColorChange} defaultValue='#F2F2F3'></input>
        </div>
        <div className='flex-row'>
          <label htmlFor="bottomTextColor" style={{ marginRight: '1rem' }}>Body Text Color</label>
          <input type="color" name='bottomTextColor' onChange={this.handleBottomTextChange} defaultValue='#000000'></input>
        </div>
        <p>Notes</p>
      </div>
    );
  }
}

export default Sidebar;