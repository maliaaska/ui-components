export interface IProduct {
  id: string
  image: string
  title: string
  price: number
  discountPrice?: number
}

export class ProductsService {
  public static getProducts(): Promise<IProduct[]> {
    return new Promise((success, fail) => {
      fetch('http://localhost:3500/products')
        .then((resp) => resp.json() as unknown as IProduct[])
        .then(success)
        .catch(fail)
    })
  }
}
