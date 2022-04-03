import { NewContact } from '../components/add-new-contact-from/add-new-contact-from.component'

export interface IContact {
  id: string
  name: string
  lastname: string
  initials?: string
  phone?: string
  mail?: string
}

export class ContactsService {
  public static getContacts(): Promise<IContact[]> {
    return new Promise((success, fail) => {
      fetch('http://localhost:3500/contacts')
        .then((resp) => resp.json() as unknown as IContact[])
        .then(success)
        .catch(fail)
    })
  }

  public static addNewContact(contact: NewContact): Promise<void> {
    return new Promise((success, fail) => {
      fetch('http://localhost:3500/contacts', {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(contact)
      })
        .then(() => success())
        .catch(fail)
    })
  }
}
