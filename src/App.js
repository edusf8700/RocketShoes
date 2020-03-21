import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobolStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobolStyle />
    </BrowserRouter>
  );
}

export default App;
