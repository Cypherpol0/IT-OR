import { useState } from 'react'
import Header from './assets/components/Header/Header'
import Movies from './assets/components/Movies/Movies'
import './App.css'

function App() {

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Movies />
      </main>
    </div>
  )
}

export default App
