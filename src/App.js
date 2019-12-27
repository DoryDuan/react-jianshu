import React from 'react';
import Header from './common/header'
import {GlobalStyle} from "./style";
import {GlobalIconfont} from "./statics/iconfont/iconfont";
import store from './store'
import {Provider} from 'react-redux'
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'


function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle />
        <GlobalIconfont />
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' component={Home} exact></Route>
            <Route path='/detail' component={Detail} exact></Route>
            <Route path='/login' component={Login} exact></Route>
            <Route path='/write' component={Write} exact></Route>
            {/* <Route path='/detail/:id' component={Detail} exact></Route> */}
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
