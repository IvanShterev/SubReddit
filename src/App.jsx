import { useState } from 'react';
import './App.scss';
import Nav from './navigation/nav';
import LeftSidebar from './left-sidebar/left-sidebar';
import MainContent from './main-content/main-content';
import InfoMain from './info-main/info-main';

{/* https://www.reddit.com/r/AmItheAsshole/ */}

function App() {

  return (
    <>
      <Nav />
      <LeftSidebar />
      <MainContent />
    </>
  )
}

export default App
