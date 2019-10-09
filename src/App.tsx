import React from 'react';
import WebLayout from './layout/index'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
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
            <BrowserRouter>
                <WebLayout></WebLayout>
            </BrowserRouter>
        </ConfigProvider>
    </div>
  );
}

export default App;
