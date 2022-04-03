import React, { useCallback, useEffect, useState } from 'react'
import { ContactsService, IContact } from './services/contact.service'
import { ContactList } from './components/contact-list/contact-list.component'
import { ContactPageStyled, HomeButtonStyled } from './contacts.style'
import { Header } from './components/header/header.component'
import { Link } from 'react-router-dom'

import {
  AddNewContactForm,
  NewContact
} from './components/add-new-contact-from/add-new-contact-from.component'

export const ContactsPage: React.VFC = () => {
  const [contacts, setContact] = useState<IContact[]>([])

  const [isFormVisible, setIsFormVisible] = useState(true)

  const handleNewContact = useCallback(() => {
    setIsFormVisible(true)
  }, [])

  const hideAddNewContactFrom = useCallback(() => {
    setIsFormVisible(false)
  }, [])

  const handleSave = useCallback((contact: NewContact) => {
    ContactsService.addNewContact(contact).finally(() => {
      setIsFormVisible(false)
    })
  }, [])

  useEffect(() => {
    // TODO: loading
    // TODO: error handling

    ContactsService.getContacts().then((resp) => {
      setContact(resp)
    })
  }, [])

  return (
    <ContactPageStyled>
      <HomeButtonStyled>
        <Link to={'/'}>Back home</Link>
      </HomeButtonStyled>
      <Header onAddNewContact={handleNewContact} />
      {isFormVisible && <AddNewContactForm onSave={handleSave} onCancel={hideAddNewContactFrom} />}
      <ContactList contacts={contacts} />
    </ContactPageStyled>
  )
}
