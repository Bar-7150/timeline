import { useState } from 'react'

import './App.css'
import Timeline from './components/timeline'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Timeline />
    </>
  )
}

export default App
