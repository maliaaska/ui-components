import React from 'react'
import { ProductTile } from './components/product-tile/product-tile.component'
import './App.css'

function App() {
  return (
    <div className="App">
      <ProductTile
        price={100.24}
        discountPrice={21321}
        image={'https://via.placeholder.com/150'}
        title={'Lorem ipsum'}
      />
    </div>
  )
}

export default App
