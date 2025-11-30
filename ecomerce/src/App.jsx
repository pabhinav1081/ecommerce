import {Routes, Route} from 'react-router'
import './App.css'
import OrdersPage from './pages/OrdersPage.jsx'
import Checkoutpage from './pages/Checkoutpage.jsx'
import HomePage from './pages/HomePage.jsx'
import Tracking from './pages/tracking.jsx'
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path ="/checkout" element={<Checkoutpage />} />
      <Route path ="/order" element={<OrdersPage />} />
      <Route path ="/tracking" element={<Tracking />} />

    </Routes>
    //<HomePage />

  )
}

export default App
