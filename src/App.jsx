import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Section } from './components/Section/Section'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
        <Main />            
      <Footer />
    </div>
  )
}

export default App
