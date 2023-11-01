import React from 'react';
import DebatePost from './components/DebatePost';
import Header from './components/Header';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main-container">
        <LeftSideBar />
        <div className="feed-container">
          <DebatePost />
        </div>
        <RightSideBar />
      </main>
    </div>
  );
}

export default App;
