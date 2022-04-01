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
  const { name, lastName, phone, mail } = contact

  // const nameInitial = () => {
  //   contact.name.indexOf(initial(, 0 ))
  // }
  return (
    <ContactsWrapperStyled>
      <ContactWrapperStyled>
        <ContactNameStyled>
          {name}
          <br />
          {lastName}
        </ContactNameStyled>
        <ContactDataStyled>
          <ContactPhoneStyled>{phone}</ContactPhoneStyled>
          <ContactMailStyled>{mail}</ContactMailStyled>
        </ContactDataStyled>
      </ContactWrapperStyled>
    </ContactsWrapperStyled>
  )
}
