import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ListingPage from './pages/ListingPage'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listing/:id" element={<ListingPage />} />
        <Route path="/about" element={<AboutPage />} />
       </Routes>
    </Router>
  </StrictMode>
)