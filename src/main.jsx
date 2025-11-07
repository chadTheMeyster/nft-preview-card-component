import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex justify-center items-center h-dvh flex-col bg-neutralBlue-950 text-white font-Outfit'>
      <App />
    </div>
  </StrictMode>,
)
