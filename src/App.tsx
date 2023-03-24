import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ResultPage from './pages/ResultPage/ResultPage';

const App = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/result" element={<ResultPage />} />
  </Routes>
);

export default App;
