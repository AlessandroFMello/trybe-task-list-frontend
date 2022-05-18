import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage />}
      />
    </Routes>
  );
}

export default App;
