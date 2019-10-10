import React, { Component } from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Siderbar'
import Routes from './routes'
import './App.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header></Header>
        </header>
        <section className="App-content">
          <div className="sidebar">
            <Sidebar></Sidebar>
          </div>
          <div className="content">
            <Routes></Routes>
          </div>
        </section>
        <section className="App-footer">
          <Footer></Footer>
        </section>
      </div>
    )
  }
}

export default App;
