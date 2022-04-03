import React, { useCallback, useRef } from 'react'
import { AddNewContactFormStyled } from './add-new-contact-from.style'
import { IContact } from '../../services/contact.service'

export type NewContact = Omit<IContact, 'id'>

interface IAddNewContactFormProps {
  onSave?: (newContact: NewContact) => void
  onCancel?: () => void
}

export const AddNewContactForm: React.VFC<IAddNewContactFormProps> = ({ onSave, onCancel }) => {
  const nameRef = useRef<HTMLInputElement>(null)
  const lastnameRef = useRef<HTMLInputElement>(null)
  const mailRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)

  const handleOnSave = useCallback(() => {
    onSave?.({
      name: nameRef.current?.value || '',
      lastname: lastnameRef.current?.value || '',
      mail: mailRef.current?.value || '',
      phone: phoneRef.current?.value || ''
    })
  }, [onSave])

  return (
    <AddNewContactFormStyled>
      <input ref={nameRef} type="text" name="name" placeholder="Name" />
      <input ref={lastnameRef} type="text" name="lastname" placeholder="Lastname " />
      <input ref={mailRef} type="tel" placeholder="+48 000 000 000" />
      <input ref={phoneRef} type="email" placeholder="mail@address.com" />

      <button onClick={onCancel}>Cancel</button>
      <button onClick={handleOnSave}>Save</button>
    </AddNewContactFormStyled>
  )
}
