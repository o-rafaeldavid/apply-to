import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Ruas from './routes.tsx'
import "./main.scss"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Ruas />
    </BrowserRouter>
  </React.StrictMode>
)
