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
    imgUrl: "/assets/hero-alt.jpeg",
    itemId: "premium-t-shirt",
    itemUrl: "",
    name: "Premium t-shirt",
    price: 59.5,
    salePrice: 0,
  },
  {
    description:
      "An upgraded version of our basic tee with actually good materials",
    imgUrl: "/assets/hero-alt.jpeg",
    itemId: "premium-t-shirt",
    itemUrl: "",
    name: "Premium t-shirt",
    price: 59.5,
    salePrice: 5.95,
  },
  {
    description:
      "An upgraded version of our basic tee with actually good materials",
    imgUrl: "/assets/hero-alt.jpeg",
    itemId: "premium-t-shirt",
    itemUrl: "",
    name: "Premium t-shirt",
    price: 59.5,
    salePrice: 0,
  },
  {
    description:
      "An upgraded version of our basic tee with actually good materials",
    imgUrl: "/assets/hero-alt.jpeg",
    itemId: "premium-t-shirt",
    itemUrl: "",
    name: "Premium t-shirt",
    price: 59.5,
    salePrice: 0,
  },
]
