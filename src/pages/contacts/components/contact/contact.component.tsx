import React from 'react'
import { IContact } from '../../services/contact.service'
import { getInitials } from '../../services/helpers/initials.helper'
import {
  ContactWrapperStyled,
  ImageStyled,
  ContactNameStyled,
  ContactDataStyled,
  ContactPhoneStyled,
  ContactMailStyled
} from './contact.style'

interface IContactTileProps {
  contact: IContact
}

export const ContactTile: React.VFC<IContactTileProps> = ({ contact }) => {
  const { name, lastname, phone, mail } = contact

  return (
    <ContactWrapperStyled>
      <ImageStyled>{getInitials(name, lastname)}</ImageStyled>
      <ContactDataStyled>
        <ContactNameStyled>
          {name} {lastname}
        </ContactNameStyled>
        <ContactPhoneStyled>{phone}</ContactPhoneStyled>
        <ContactMailStyled>{mail}</ContactMailStyled>
      </ContactDataStyled>
    </ContactWrapperStyled>
  )
}
