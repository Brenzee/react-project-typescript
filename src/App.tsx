import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Header from './Components/Header'
import MainScreen from './Screens/MainScreen'
import Footer from './Components/Footer'
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/CartScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart' component={CartScreen} />
        <Route path='/' exact component={MainScreen} />
      </main>
      <Footer />
    </Router>
  )
}

export default App
