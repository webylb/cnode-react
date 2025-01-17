import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import NotFound from './components/NotFound';
import Login from './components/Login';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={ App }></Route>
      <Route path="/tag" component={App}></Route>
      <Route exact path="/login" component={ Login }></Route>
      <Route exact path="/404" component={ NotFound }></Route>
      <Route component={ NotFound }></Route>
    </Switch>
  </Router>
  ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
