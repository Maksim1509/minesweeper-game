import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ResultPage from './pages/ResultPage/ResultPage';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="result" element={<ResultPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default App;
