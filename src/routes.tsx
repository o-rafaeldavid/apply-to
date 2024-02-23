import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './pages'

export default function Ruas() {
  const [count, setCount] = useState(0)

  return (
    <Routes> 
      <Route path="/" element={<Index/>}/>
    </Routes>
  )
}
