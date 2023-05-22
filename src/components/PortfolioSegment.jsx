import React, { Component } from 'react';
import PortfolioTextbox from './PortfolioTextbox.jsx';

class PortfolioSegment extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      components: [],
      nextId: 0,
      responses:{},
    };
  }

  // onTextSegmentChange = (value) => {
  //   this.props.onSegmentChange(value)
  // }

  addComponent = () => {
    const { title } = this.props;
    const { components, nextId } = this.state;
    
    const newComponent = (
      <PortfolioTextbox 
        key={nextId}
        id={nextId}
        title={title}
        onDelete={() => this.deleteComponent(nextId)}
        onSegmentChange={this.props.onSegmentChange}
      />
    );
    this.setState({ 
      components: [...components, newComponent],
      nextId: nextId + 1
    });
  };

  deleteComponent = (key) => {
    const { components } = this.state;
    const updatedComponents = components.filter(component => component.props.id !== key);
    this.setState({ components: updatedComponents });
  };

  render() {
    const { title } = this.props;
    const { components } = this.state;

    return (
      <div className='flex-column PortfolioSegment'>
        <div className='flex-row'>
          <p>{title}</p>
          <button type="button" onClick={this.addComponent}>New Item</button>
        </div>
        {components}
      </div>
    );
  }
}

export default PortfolioSegment;