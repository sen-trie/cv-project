import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PortfolioHead from './components/PortfolioHead';
import PortfolioSegment from './components/PortfolioSegment';
import PortfolioSkill from './components/PortfolioSkill';

function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [head, setHead] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});
  
  const onParagraphsChange = (value) => {
    setParagraphs(value);
  };

  const onHeadChange = (value) => {
    setHead(value);
  };

  const onTextSegmentChange = (value) => {
    setExperience(value)
  }

  const handleSubmit = ()=> {
    console.log(experience);
  }

  return (
    <div className="App flex-column">
      <Header />
      <form onSubmit={handleSubmit} className='main flex-row'>
        <div className='portfolio'>
          <PortfolioHead onHeadChange={onHeadChange}></PortfolioHead>
          <PortfolioSegment title="Education" onSegmentChange={onTextSegmentChange}></PortfolioSegment>
          <PortfolioSegment title="Experience" onSegmentChange={onTextSegmentChange}></PortfolioSegment>
          <PortfolioSkill title="Skills" onParagraphsChange={onParagraphsChange}>
          </PortfolioSkill>
        </div>
        <Sidebar></Sidebar>
      </form>
    </div>
  );
}

export default App;
