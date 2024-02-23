import { Route, Routes } from 'react-router-dom'
import Index from './pages'

export default function Ruas() {
  return (
    <Routes> 
      <Route path="/" element={<Index/>}/>
    </Routes>
  )
}
