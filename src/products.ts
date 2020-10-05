interface Product {
  id: number
  name: string
  price: number
  category: string
  desc: string
  image: string
}

export const products: Array<Product> = [
  {
    id: 1,
    name: 'iPhone XS',
    price: 895.95,
    category: 'phone',
    desc: 'iPhone XS 256 GB',
    image:
      'https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1-500x500.jpg',
  },
  {
    id: 2,
    name: 'MacBook Pro',
    price: 1295.95,
    category: 'computer',
    desc: 'MacBook Pro 256 GB',
    image:
      'https://i.pcmag.com/imagery/reviews/038Dr5TVEpwIv8rCljx6UcF-14..1588802180.jpg',
  },
  {
    id: 3,
    name: 'AirPods',
    price: 195.95,
    category: 'headphones',
    desc: 'Apple Airpods',
    image:
      'https://img2.owcnow.com/imgs/ndesc/Apple/APLMV7N2BEA/APLMV7N2BEA_hero.jpg',
  },
  {
    id: 4,
    name: 'iMac',
    price: 1695.95,
    category: 'computer',
    desc: 'Apple iMac',
    image:
      'https://i.pcmag.com/imagery/reviews/038Dr5TVEpwIv8rCljx6UcF-14..1588802180.jpg',
  },
]
