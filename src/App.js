import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PortfolioHead from './components/PortfolioHead';
import PortfolioSegment from './components/PortfolioSegment';
import PortfolioSkill from './components/PortfolioSkill';

function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [head, setHead] = useState({});
  const [segment, setSegment] = useState({});
  
  const onParagraphsChange = (value) => {
    setParagraphs(value);

    
  };

  // useEffect(()=>{
    
  // },[paragraphs])

  const onHeadChange = (value) => {
    setHead(value);
  };

  const onTextSegmentChange = (id, title, value) => {
    if (value === '') {
      setSegment(prevSegment => {
        const updatedSegment = { ...prevSegment };
        if (updatedSegment[title]) {
          delete updatedSegment[title][id];
          if (Object.keys(updatedSegment[title]).length === 0) {
            delete updatedSegment[title];
          }
        }
        return updatedSegment;
      });
    } else {
      setSegment(prevSegment => ({
        ...prevSegment,
        [title]: {
          ...prevSegment[title],
          [id]: value,
        },
      }));
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setSegment(prevSegment => ({...prevSegment}));
    setHead(prevHead => ({...prevHead}));
    setParagraphs(prevParagraphs => [...prevParagraphs]);
    
    console.log(head)
    console.log(paragraphs)
    console.log(segment)
  }

  return (
    <div className="App flex-column">
      <Header />
      <form onSubmit={handleSubmit} className='main flex-row'>
        <div className='portfolio'>
          <PortfolioHead onHeadChange={onHeadChange}></PortfolioHead>
          <PortfolioSegment title="Education" onSegmentChange={onTextSegmentChange}></PortfolioSegment>
          <PortfolioSegment title="Experience" onSegmentChange={onTextSegmentChange}></PortfolioSegment>
          {/* Idea: Merge PortfolioSegments */}
          <PortfolioSkill title="Skills" onParagraphsChange={onParagraphsChange}>
          </PortfolioSkill>
        </div>
        <Sidebar></Sidebar>
      </form>
    </div>
  );
}

export default App;
