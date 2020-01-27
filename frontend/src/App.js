import React from 'react';
import './App.css';
import DashBoard from './components/meets/dashboard';
import Header from './components/layouts/header';
import Meets from './components/meets/meets';

import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <DashBoard />
        <Meets />
      </div>
    </Provider>
  );
}

export default App;
