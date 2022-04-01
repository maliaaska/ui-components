import React from 'react'
import { IContact } from '../../services/contact.service'
import { ContactTile } from '../contact/contact.component'
import { ContactsWrapperStyled } from './contact-list.style'

interface IContactListProps {
  contacts: IContact[]
}

export const ContactList: React.VFC<IContactListProps> = ({ contacts }) => {
  return (
    <ContactsWrapperStyled>
      {contacts?.map((contact) => (
        <ContactTile key={contact.id} contact={contact} />
      ))}
    </ContactsWrapperStyled>
  )
}
