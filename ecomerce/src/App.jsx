import {Routes, Route} from 'react-router'
import './App.css'
import HomePage from './pages/HomePage.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path ="checkout.html" element={<div>Checkout Page</div>} />
    </Routes>
    //<HomePage />

  )
}

export default App
