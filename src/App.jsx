import { useState } from 'react'
import './App.css'
import Navibar from './Components/Navibar'
import Heero from './Components/Heero'
import MeBout from './Components/MeBout'
import SnT from './Components/SnT'
import Portfolio from './Components/Portfolio'
import Footsies from './Components/Footsies'

function App() {
  

  return (
    <div>
        <Navibar/>
        <Heero/>
        <MeBout/>
        <SnT/>
        <Portfolio/>
        <Footsies/>
    </div>
  )
}

export default App
