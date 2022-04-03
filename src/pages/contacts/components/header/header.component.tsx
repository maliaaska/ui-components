import React from 'react'
import { HeaderStyled } from './header.style'

interface IHeaderProps {
  onAddNewContact?: () => void
}

export const Header: React.VFC<IHeaderProps> = ({ onAddNewContact }) => {
  return (
    <HeaderStyled>
      <button onClick={onAddNewContact}>Add new Contact</button>
    </HeaderStyled>
  )
}
