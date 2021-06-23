import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { switchTheme } from './utils'
import { Calculator } from './components/Calculator'

function App() {
  return (
    <div className="app">
      <div className="container">
        <Calculator></Calculator>
      </div>
    </div>
  )
}

export default App
