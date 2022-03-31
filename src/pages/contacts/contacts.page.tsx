import React, { useEffect, useState } from 'react'
import { ContactsService, IContact } from './services/contact.service'
import { ContactTile } from './components/contact/contact.component'

export const ContactsPage: React.VFC = () => {
  const [contacts, setContact] = useState<IContact[]>([])

  useEffect(() => {
    // loading
    // error handling

    ContactsService.getContacts().then(setContact)
  }, [])

  return (
    <div>
      {contacts?.map((contact) => (
        <ContactTile key={contact.id} contact={contact} />
      ))}
    </div>
  )
}
