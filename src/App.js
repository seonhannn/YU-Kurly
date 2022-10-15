import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
