export interface IContact {
  id: string
  name: string
  phone?: string
  mail?: string
}

const contactsMock: IContact[] = [
  {
    id: '1',
    name: 'Arkadiusz Milewski',
    phone: '664-467-823',
    mail: 'arek@gmail.com'
  },
  {
    id: '2',
    name: 'Mateusz Zychowski',
    phone: '788-325-772',
    mail: 'mzych@gmail.com'
  },
  {
    id: '3',
    name: 'Norbert Gwiździński',
    phone: '784-245-234',
    mail: 'gwizdek@gmail.com'
  },
  {
    id: '4',
    name: 'Łukasz Świderek',
    phone: '695-104-443',
    mail: 'swider@yahoo.com'
  },
  {
    id: '5',
    name: 'Janusz Raysku',
    phone: '604-384-999',
    mail: 'Janczi@gmail.com'
  },
  {
    id: '6',
    name: 'Jarek Duda',
    phone: '456-333-546',
    mail: 'Dudson@gmail.com'
  }
]

export class ContactsService {
  public static getContacts(): Promise<IContact[]> {
    return new Promise((success) => {
      success(contactsMock)
    })
  }
}
