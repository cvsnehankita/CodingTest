import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './components/Post';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewPost from './components/NewPost';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/newpost" element={<NewPost />} />
      </Routes>
      </BrowserRouter>
    </div>
  )     
}

export default App
