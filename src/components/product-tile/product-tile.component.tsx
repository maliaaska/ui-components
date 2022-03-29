import React from 'react'
import {
  ProductStyled,
  PriceStrikeStyled,
  PriceStyled,
  StrikeStyled,
  TitleStyled
} from './product-tile.style'

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
    <ProductStyled>
      <img src={image} alt={title} />
      <TitleStyled>{title}</TitleStyled>
      <PriceStrikeStyled>
        {discountPrice ? (
          <>
            <PriceStyled>{discountPrice} zł</PriceStyled>
            <StrikeStyled>{price} zł</StrikeStyled>
          </>
        ) : (
          <PriceStyled>{price}</PriceStyled>
        )}
      </PriceStrikeStyled>
    </ProductStyled>
  )
}
