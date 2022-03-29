import styled from 'styled-components'

export const ProductStyle = styled.div`
  width: 100%;
  display: grid;
  flex-direction: row;
  column-gap: 10px;
  row-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 100%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    grid-template-columns: 50% 50%;
  }

  @media (min-width: 992px) {
    grid-template-columns: 25% 25% 25% 25%;
  }
`
