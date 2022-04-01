import React, { useEffect, useState } from 'react'
import { ContactsService, IContact } from './services/contact.service'
import { ContactTile } from './components/contact/contact.component'
import { ContactsWrapperStyled } from './components/contact/contact.style'

export const ContactsPage: React.VFC = () => {
  const [contacts, setContact] = useState<IContact[]>([])

  useEffect(() => {
    // loading
    // error handling

    ContactsService.getContacts().then(setContact)
  }, [])

  return (
    <ContactsWrapperStyled>
      {contacts?.map((contact) => (
        <ContactTile key={contact.id} contact={contact} />
      ))}
    </ContactsWrapperStyled>
  )
}
