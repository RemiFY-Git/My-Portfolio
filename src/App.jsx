import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import './index.css'
import { ThemeToggle } from './Components/ThemeToggle'

function App() {
  return (
    <BrowserRouter>
      {/* Global component (visible on all pages) */}
      <ThemeToggle />

      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
