import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './pages/Product'
function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/product" element={<Product />} />
        {/* otras rutas aquí */}
      </Routes>
    </Router>
  )
}

export default App
