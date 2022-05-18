import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import Settings from './pages/Settings';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> } />
      <Route exact path="/game" element={ <Game /> } />
      <Route exact path="/settings" element={ <Settings /> } />
      <Route exact path="/feedback" element={ <Feedback /> } />
      <Route exact path="/ranking" element={ <Ranking /> } />
    </Routes>
  );
}
