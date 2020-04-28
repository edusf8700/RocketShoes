import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import history from './services/history';

import './config/ReactotronConfig';

import GlobolStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobolStyle />
        <ToastContainer autoClose={4000} />
      </Router>
    </Provider>
  );
}

export default App;
