import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MainSection from './components/MainSection';
import FeedbackSection from './components/FeedbackSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainSection />
      <FeedbackSection />
    </div>
  );
}

export default App;