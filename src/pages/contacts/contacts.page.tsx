import React, { useEffect, useState } from 'react'
import { ContactsService, IContact } from './services/contact.service'
import { ContactList } from './components/contact-list/contact-list.component'
import { ContactPageStyled } from './contacts.style'

export const ContactsPage: React.VFC = () => {
  const [contacts, setContact] = useState<IContact[]>([])

  useEffect(() => {
    // loading
    // error handling

    ContactsService.getContacts().then(setContact)
  }, [])

  return (
    <ContactPageStyled>
      <ContactList contacts={contacts} />
    </ContactPageStyled>
  )
}
