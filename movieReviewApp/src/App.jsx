import { useState } from 'react'
import Header from './assets/components/Header/Header'
import './App.css'

function App() {

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <h2>Welcome to the Movie Review App!</h2>
        <p>Discover and share your favorite movies.</p>
      </main>
    </div>
  )
}

export default App
