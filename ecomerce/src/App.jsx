import {Routes, Route} from 'react-router'
import './App.css'
import Checkoutpage from './pages/Checkoutpage.jsx'
import HomePage from './pages/HomePage.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path ="checkout.html" element={<Checkoutpage />} />
    </Routes>
    //<HomePage />

  )
}

export default App
