import React from 'react'
import './product-tile.style.css'

interface ProductTileProps {
  image: string
  title: string
  price: number
  discountPrice?: number
  label?: string
}
export const ProductTile: React.VFC<ProductTileProps> = ({
  title,
  image,
  price,
  discountPrice
}) => {
  return (
    <div className="product-tile">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div className={'price-strike'}>
        {discountPrice ? (
          <>
            <span className="price">{discountPrice} zł</span>
            <span className="strike">{price} zł</span>
          </>
        ) : (
          <span className="price">{price}</span>
        )}
      </div>
    </div>
  )
}
