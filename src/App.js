import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobolStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobolStyle />
    </BrowserRouter>
  );
}

export default App;
