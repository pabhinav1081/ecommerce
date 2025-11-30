import {Routes, Route} from 'react-router'
import './App.css'
import OrdersPage from './pages/OrdersPage.jsx'
import Checkoutpage from './pages/Checkoutpage.jsx'
import HomePage from './pages/HomePage.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path ="/checkout" element={<Checkoutpage />} />
      <Route path ="/order" element={<OrdersPage />} />

    </Routes>
    //<HomePage />

  )
}

export default App
