export interface IContact {
  id: string
  name: string
  lastName: string
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
}
