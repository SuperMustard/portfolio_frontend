import React from 'react'

import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './component';
import { StarsCanvas } from './component/canvas';
import './App.scss'

const App = () => {
  return (
    <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <div style={{position: 'relative', zIndex: '0'}}>
        <Footer />
        <StarsCanvas />
        </div>
    </div>
  )
}

export default App