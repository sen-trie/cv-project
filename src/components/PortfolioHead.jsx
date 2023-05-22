import React, { Component } from 'react';

class PortfolioHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
      name: '',
      bio: '',
      address: '',
      email: '',
      phone: '',
      linkedin: '',
      github: ''
    };
  }

  handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const blob = new Blob([reader.result], { type: file.type });
      this.setState({ selectedImage: URL.createObjectURL(blob) });
      this.props.onHeadChange(this.state);
    };
    reader.readAsArrayBuffer(file);
    
  };

  handleInputChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
    this.props.onHeadChange(this.state);
  };

  render() {
    const { selectedImage, name, bio, address, email, phone, linkedin, github } = this.state;

    return (
      <div className='flex-row PortfolioHead'>
        <label className='upload-image' htmlFor="upload-input">
          {selectedImage ? (
            <img className="image-preview" src={selectedImage} alt=''/>
          ) : (
            <div className="image-placeholder">Upload Image</div>
          )}
        <input
            id="upload-input"
            type="file"
            accept="image/*"
            onChange={this.handleImageUpload}
          />
        </label>
        <div className='flex-column'>
          <input type="text" id="name" value={name} placeholder='Input name' onChange={this.handleInputChange}></input>
          <textarea  rows='6' id="bio" value={bio} placeholder='Bio about yourself' onChange={this.handleInputChange}></textarea>
        </div>
        <div className='flex-column'>
          <input type="text" id="address" value={address} placeholder='Address' onChange={this.handleInputChange}/>
          <input type="text" id="email" value={email} placeholder='Email' onChange={this.handleInputChange}/>
          <input type="text" id="phone" value={phone} placeholder='Phone' onChange={this.handleInputChange}/>
          <input type="text" id="linkedin" value={linkedin} placeholder='LinkedIn' onChange={this.handleInputChange}/>
          <input type="text" id="github" value={github} placeholder='Github' onChange={this.handleInputChange}/>
        </div>
      </div>
    );
  }
}

export default PortfolioHead;