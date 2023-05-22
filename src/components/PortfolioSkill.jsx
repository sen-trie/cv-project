import React, { Component } from 'react';

class PortfolioSkill extends Component {
  constructor(props) {
    super(props);
    this.state = {
        inputValue: '',
        paragraphs: [],
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  addNew = () => {
    const { inputValue, paragraphs } = this.state;

    if (inputValue.trim() !== '') {
      const updatedParagraphs = [...paragraphs, inputValue];
      this.setState({ paragraphs: updatedParagraphs, inputValue: '' });
      this.props.onParagraphsChange(updatedParagraphs);
    }
  };

  removeNew = (index) => {
    const { paragraphs } = this.state;
    const updatedParagraphs = [...paragraphs];

    updatedParagraphs.splice(index, 1);
    this.setState({ paragraphs: updatedParagraphs });
    this.props.onParagraphsChange(updatedParagraphs);
  };

  render() {
    const { title } = this.props;
    const { inputValue, paragraphs } = this.state;

    return (
      <div className='flex-column PortfolioSkill'>
        <p>{title}</p>
        <div className='flex-row'>
            <input type='text' value={inputValue} onChange={this.handleInputChange} placeholder='Your Skill'></input>
            <button type="button" onClick={this.addNew}>Add</button>
        </div>
        <div>
            {paragraphs.map((paragraph, index) => (
                <p key={index}>
                     • {paragraph}
                    <button className='delete-skill' type="button" onClick={() => this.removeNew(index)}>Delete</button>
                </p>
            ))}
        </div>
      </div>
    );
  }
}

export default PortfolioSkill;