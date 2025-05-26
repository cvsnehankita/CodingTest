import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './components/Post';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/post" element={<Post />} />
      </Routes>
      </BrowserRouter>
    </div>
  )     
}

export default App
