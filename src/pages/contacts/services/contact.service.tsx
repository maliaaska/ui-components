export interface IContact {
  id: string
  name: string
  lastName: string
  phone?: string
  mail?: string
}

const contactsMock: IContact[] = [
  {
    id: '1',
    name: 'Arkadiusz',
    lastName: ' Milewski',
    phone: '664-467-823',
    mail: 'arek@gmail.com'
  },
  {
    id: '2',
    name: 'Mateusz ',
    lastName: 'Zychowski',
    phone: '788-325-772',
    mail: 'mzych@gmail.com'
  },
  {
    id: '3',
    name: 'Norbert ',
    lastName: 'Gwiździński',
    phone: '784-245-234',
    mail: 'gwizdek@gmail.com'
  },
  {
    id: '4',
    name: 'Łukasz ',
    lastName: 'Świderek',
    phone: '695-104-443',
    mail: 'swider@yahoo.com'
  },
  {
    id: '6',
    name: 'Jarek ',
    lastName: 'Duda',
    phone: '456-333-546',
    mail: 'Dudson@gmail.com'
  },
  {
    id: '5',
    name: 'Janusz ',
    lastName: 'Raysku',
    phone: '604-384-999',
    mail: 'Janczi@gmail.com'
  }
]

export class ContactsService {
  public static getContacts(): Promise<IContact[]> {
    return new Promise((success) => {
      success(contactsMock)
    })
  }
}
