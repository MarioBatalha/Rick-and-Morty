import React, {Component} from 'react';
import Header from './component/Header/';
import api from './component/service/api';
import Main from './pages/main/'



const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);
export default App;
