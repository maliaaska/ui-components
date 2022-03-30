import React from 'react'
import { ProductStyle } from './product.style'
import { IProduct } from '../../mocks/products.mock'
import { ProductTile } from '../product-tile/product-tile.component'

interface IProductsProps {
  products?: IProduct[]
}

export const Products: React.VFC<IProductsProps> = ({ products = [] }) => {
  return (
    <ProductStyle>
      {products?.map((product) => (
        <ProductTile
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </ProductStyle>
  )
}
