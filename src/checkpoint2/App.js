// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePage from './CreatePage';
import JoinPage from './JoinPage';
import RoomLobby from './RoomLobby';
import GameSelectPage from './GameSelectPage';
import QuestionPage from './QuestionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreatePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/lobby" element={<RoomLobby />} />
        <Route path="/selectgame" element={<GameSelectPage />} />
        <Route path="/question" element={<QuestionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
