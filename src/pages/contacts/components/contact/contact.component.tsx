import React from 'react'
import { IContact } from '../../services/contact.service'
import {
  ContactsWrapperStyled,
  ContactWrapperStyled,
  ContactNameStyled,
  ContactDataStyled,
  ContactPhoneStyled,
  ContactMailStyled
} from './contact.style'
interface IContactTileProps {
  contact: IContact
}

export const ContactTile: React.VFC<IContactTileProps> = ({ contact }) => {
  const { name, phone, mail } = contact

  return (
    <ContactsWrapperStyled>
      <ContactWrapperStyled>
        <ContactNameStyled>{name}</ContactNameStyled>
        <ContactDataStyled>
          <ContactPhoneStyled>{phone}</ContactPhoneStyled>
          <ContactMailStyled>{mail}</ContactMailStyled>
        </ContactDataStyled>
      </ContactWrapperStyled>
    </ContactsWrapperStyled>
  )
}
