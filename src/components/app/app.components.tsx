import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../../pages/home/home.page'
import { ContactsPage } from '../../pages/contacts/contacts.page'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  )
}
