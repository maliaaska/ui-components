import React from 'react'
import { HeaderStyled, HeaderLeftBox, HeaderRightBox } from './header.style'

interface IHeaderProps {
  onAddNewContact?: () => void
}

export const Header: React.VFC<IHeaderProps> = ({ onAddNewContact }) => {
  return (
    <HeaderStyled>
      <HeaderLeftBox>
        <h1>Contacts</h1>
      </HeaderLeftBox>
      <HeaderRightBox>
        <div>
          <button onClick={onAddNewContact}>Add new Contact</button>
        </div>
      </HeaderRightBox>
    </HeaderStyled>
  )
}
