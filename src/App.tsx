import React from 'react';
import WebLayout from './layout/index'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/login'
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import { ConfigProvider } from 'antd'
import './App.css'
import './assets/css/common.less'
import './assets/css/reset.less'
const App: React.FC = () => {
  return (
    <div className="App">
        <ConfigProvider locale={zhCN}>
            <Router>
                <WebLayout></WebLayout>
                <Route path="/login" exact component={Login}/>
            </Router>
        </ConfigProvider>
    </div>
  );
}

export default App;
