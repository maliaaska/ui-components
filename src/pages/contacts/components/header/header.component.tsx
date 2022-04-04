import React from 'react'
import { HeaderStyled, HeaderLeftBox, HeaderRightBox } from './header.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';


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
        <div><FontAwesomeIcon icon={faUserPlus} />
          <button onClick={onAddNewContact}>Add new Contact</button>
        </div>
      </HeaderRightBox>
    </HeaderStyled>
  )
}
