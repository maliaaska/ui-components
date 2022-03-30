import React from 'react'
import { Products } from './components/products/product.component'
import { productsMock } from './mocks/products.mock'
import './App.css'

function App() {
  return (
    <div className="App">
      <Products products={productsMock} />
    </div>
  )
}

export default App
