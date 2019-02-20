import React, { Component } from 'react'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Home from './components/body/Home'


import './css/styles.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    )
  }
}

export default App;
