interface SnipCartProduct {
  description: string;
  itemId: string;
  imgUrl: string;
  itemUrl: string;
  name: string;
  price: number;
  salePrice? : number;
  // Indexer allows additional properties to object
  // Very useful for SnipCart's custom properties for product variations
  [x: string]: any
}

export const productList: SnipCartProduct[] = [
  {
    description:
      "An upgraded version of our basic tee with actually good materials",
    imgUrl: "/assets/shop/premium-t-shirt.jpg",
    itemId: "premium-t-shirt",
    itemUrl: "/shop",
    name: "Premium t-shirt",
    price: 59.5,
    salePrice: 0,
  },
  {
    description:
      "An upgraded version of our basic tee with actually good materials",
    imgUrl: "/assets/shop/big-hoodie.jpg",
    itemId: "big-hoodie",
    itemUrl: "/shop",
    name: "Big hoodie",
    price: 59.5,
    salePrice: 5.95,
  },
  {
    description:
      "An upgraded version of our basic tee with actually good materials",
    imgUrl: "/assets/hero-alt.jpeg",
    itemId: "placeholder-shirt-2",
    itemUrl: "/shop",
    name: "Placeholder 2",
    price: 59.5,
    salePrice: 0,
  },
  {
    description:
      "An upgraded version of our basic tee with actually good materials",
    imgUrl: "/assets/hero-alt.jpeg",
    itemId: "placeholder-3",
    itemUrl: "/shop",
    name: "Placeholder 3",
    price: 59.5,
    salePrice: 0,
  },
]
