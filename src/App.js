import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/Detail' element={<Detail></Detail>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
