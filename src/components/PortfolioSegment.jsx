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
          <button type="button" onClick={this.addComponent} className='flex-row'>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0" y="0" width="1em" height="1em" viewBox="0 0 122.879 122.879" enableBackground="new 0 0 122.879 122.879" xmlSpace="preserve" fill='#2f2f2f'>
            <g>
              <path fillRule="evenodd" clipRule="evenodd" d="M104.885,17.995c23.993,23.994,23.993,62.896,0,86.89 c-23.994,23.993-62.896,23.993-86.89,0c-23.993-23.994-23.993-62.896,0-86.89C41.989-5.998,80.891-5.998,104.885,17.995 L104.885,17.995z M93.607,57.949c1.928,0,3.49,1.563,3.49,3.49c0,1.928-1.563,3.49-3.49,3.49H64.93v28.678 c0,1.928-1.563,3.49-3.49,3.49c-1.927,0-3.489-1.563-3.489-3.49V64.93H29.272c-1.928,0-3.491-1.563-3.491-3.49 c0-1.927,1.563-3.49,3.491-3.49H57.95V29.271c0-1.927,1.563-3.49,3.489-3.49c1.928,0,3.49,1.563,3.49,3.49v28.678H93.607 L93.607,57.949z"/>
            </g>
          </svg> New Item</button>
        </div>
        {components}
      </div>
    );
  }
}

export default PortfolioSegment;