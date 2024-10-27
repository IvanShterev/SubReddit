import { useState } from 'react';
import './App.css';
import Nav from './navigation/nav';
import LeftSidebar from './left-sidebar/left-sidebar';
import MainContent from './main-content/main-content';
import InfoMain from './info-main/info-main';
import CreatePost from './create-post/create-post';

{/* https://www.reddit.com/r/AmItheAsshole/ */}

function App() {

  return (
    <>
      <Nav />
      <LeftSidebar />
      <MainContent />
      <CreatePost />
    </>
  )
}

export default App
