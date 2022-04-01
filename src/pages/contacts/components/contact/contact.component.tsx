import React from 'react'
import { IContact } from '../../services/contact.service'
import { getInitials } from '../../services/helpers/initials.helper'
import {
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
  const { name, lastName, phone, mail } = contact

  return (
    <ContactWrapperStyled>
      <ContactNameStyled>{getInitials(name, lastName)}</ContactNameStyled>
      <ContactDataStyled>
        <ContactPhoneStyled>{phone}</ContactPhoneStyled>
        <ContactMailStyled>{mail}</ContactMailStyled>
      </ContactDataStyled>
    </ContactWrapperStyled>
  )
}
