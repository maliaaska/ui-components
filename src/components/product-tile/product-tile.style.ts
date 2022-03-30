import styled from 'styled-components'

export const ProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f8f8f8;

  padding: 5px;

  img {
    display: block;
    max-width: 100%;
    height: 200px;
    object-fit: scale-down;
  }
`
export const PriceStrikeStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const PriceStyled = styled.span`
  color: red;
`
export const StrikeStyled = styled.span`
  text-decoration: line-through;
  color: gray;
`
export const TitleStyled = styled.h3`
  font-weight: bold;
`
