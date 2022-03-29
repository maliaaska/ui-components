export interface IProduct {
  id: string
  image: string
  title: string
  price: number
  status?: string
  secondaryTitle?: string
  discountPrice?: number
  label?: string
}

export const productsMock: IProduct[] = [
  {
    id: 'one',
    image: 'https://via.placeholder.com/150',
    title: 'imageTitle',
    price: 100,
    status: 'new',
    discountPrice: 99,
    label: 'labelOne'
  },
  {
    id: 'two',
    image: 'https://via.placeholder.com/150',
    title: 'imageTitle2',
    price: 200,
    status: 'second hand',
    discountPrice: 198,
    label: 'labelTwo'
  },
  {
    id: 'three',
    image: 'https://via.placeholder.com/150',
    title: 'imageTitle3',
    price: 300,
    discountPrice: 297
  },
  {
    id: 'four',
    image: 'https://via.placeholder.com/150',
    title: 'Lorem ipsum',
    price: 400,
    discountPrice: 396,
    label: 'labelFour'
  },
  {
    id: 'five',
    image: 'https://via.placeholder.com/150',
    title: 'imageTitle5',
    price: 500,
    label: 'labelFive'
  },
  {
    id: '6',
    image: 'https://via.placeholder.com/150',
    title: 'imageTitle6',
    secondaryTitle: 'This is secondary title',
    price: 600,
    discountPrice: 594,
    label: 'labelSix'
  }
]
