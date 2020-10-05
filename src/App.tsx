import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Header from './Components/Header'
import MainScreen from './Screens/MainScreen'
import Footer from './Components/Footer'
import ProductScreen from './Screens/ProductScreen'
import Switch from 'react-bootstrap/esm/Switch'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Switch>
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/' exact component={MainScreen} />
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}

export default App
