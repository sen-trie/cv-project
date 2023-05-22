import React, { Component } from 'react';

class PortfolioTextbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: props.id,
        position: '',
        company: '',
        startDate: '',
        endDate: '',
        desc: '',
    };
  }

  deleteSelf = () => {
    const { onDelete } = this.props;
    onDelete();
  };

  handleInputChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
    this.props.onSegmentChange(this.state);

    // console.log(this.state)
  }

  render() {
    const { position, company, startDate, endDate, desc } = this.state;

    return (
      <div className='PortfolioTextbox'>
        <input type='text' id='position' value={position} placeholder='Position' onChange={this.handleInputChange}></input>
        <input type='text' id='company' value={company} placeholder='Company' onChange={this.handleInputChange}></input>
        <input type='text' id='startDate' value={startDate} placeholder='Start Date' onChange={this.handleInputChange}></input>
        <input type='text' id='endDate' value={endDate} placeholder='End Date' onChange={this.handleInputChange}></input>
        <textarea rows='6' id='desc' value={desc} type='textbox' placeholder='Description' onChange={this.handleInputChange}></textarea>
        <button type="button" onClick={this.deleteSelf}>Delete</button>
      </div>
    );
  }
}

export default PortfolioTextbox;