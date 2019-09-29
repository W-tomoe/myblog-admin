import React from 'react';
import WebLayout from './layout/index'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import './assets/css/common.less'

const App: React.FC = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <WebLayout></WebLayout>
        </BrowserRouter>
    </div>
  );
}

export default App;
