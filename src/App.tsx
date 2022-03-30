import React, { useState, useEffect } from 'react'
import { Products } from './components/products/products.component'
import { IProduct, ProductsService } from './services/products/products.service'
import './App.css'
import { ProductsLoader } from './services/products/products.loader'

function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsError(false)
    setIsLoading(true)
    ProductsService.getProducts()
      .then(setProducts)
      .catch(() => {
        setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="App">
      {isLoading && <ProductsLoader />}
      {!isLoading && !isError && <Products products={products} />}
      {isError && <p>All went wrong</p>}
    </div>
  )
}

export default App
