import React from 'react'
import { ProductTile } from '../product-tile/product-tile.component'
import { IProduct } from '../../services/products/products.service'
import { ProductsStyle } from './products.style'

interface IProductsProps {
  products?: IProduct[]
}

export const Products: React.VFC<IProductsProps> = ({ products = [] }) => {
  return (
    <ProductsStyle>
      {products?.map((product) => (
        <ProductTile
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          discountPrice={product.discountPrice}
        />
      ))}
    </ProductsStyle>
  )
}
