interface SnipCartProduct {
  description: string
  itemId: string
  imgUrl: string
  itemUrl: string
  name: string
  price: number
  salePrice?: number
  custom1Name?: String
  custom1Options?: String
}

interface Placeholder {
  itemId: "placeholder"
}

export const productList: (SnipCartProduct | Placeholder)[] = [
  {
    description:
      "Show off your all-American consumption of fashion with this rectangular 995 logo in light mode.",
    imgUrl: "/assets/shop/shirts/995-bar-tee-white.jpg",
    itemId: "995-bar-tee-white",
    itemUrl: "/shop",
    name: "995 bar tee light",
    price: 99.5,
    salePrice: 0,
    custom1Name: "Size",
    custom1Options: "sm|med|lg|xl",
  },
  {
    description:
      "Show off your all-American consumption of fashion with this square 995 logo in light mode.",
    imgUrl: "/assets/shop/shirts/995-square-tee-white.jpg",
    itemId: "995-square-tee-white",
    itemUrl: "/shop",
    name: "995 square tee light",
    price: 99.5,
    salePrice: 9.95,
    custom1Name: "Size",
    custom1Options: "sm|med|lg|xl",
  },
  {
    description:
      "Not a big flexer? This smaller logo is for those who like low-key be baller.",
    imgUrl: "/assets/shop/shirts/995-sm-square-tee-white.jpg",
    itemId: "995-sm-square-tee-white",
    itemUrl: "/shop",
    name: "995 sm square tee light",
    price: 99.5,
    salePrice: 9.95,
    custom1Name: "Size",
    custom1Options: "sm|med|lg|xl",
  },
  {
    description: "Hoodies are amazing. Buy now.",
    imgUrl: "/assets/shop/hoodies/995-sq-hoodie-white.jpg",
    itemId: "995-sq-hoodie-white",
    itemUrl: "/shop",
    name: "995 square hoodie light",
    price: 99.5,
    salePrice: 0,
    custom1Name: "Size",
    custom1Options: "sm|med|lg|xl",
  },
  {
    description:
      "If you didn't want to buy the same hoodie again, this one has a slightly different logo.",
    imgUrl: "/assets/shop/hoodies/995-sm-rect-tee-white.jpg",
    itemId: "995-sm-rect-tee-white",
    itemUrl: "/shop",
    name: "995 rectangle hoodie light",
    price: 95.5,
    salePrice: 0,
    custom1Name: "Size",
    custom1Options: "sm|med|lg|xl",
  },
  {
    description:
      "Rare limited edition yellow that is honestly more iconic than the logo itself.",
    imgUrl: "/assets/shop/hoodies/995-square-tee-yellow.jpg",
    itemId: "995-square-tee-yellow",
    itemUrl: "/shop",
    name: "995 rectangle hoodie yellow",
    price: 995,
    salePrice: 0,
    custom1Name: "Size",
    custom1Options: "sm|med|lg|xl",
  },
  {
    description: "Dark mode always has a price tag because it's so good.",
    imgUrl: "/assets/shop/shirts/995-bar-tee-black.jpg",
    itemId: "995-bar-tee-black",
    itemUrl: "/shop",
    name: "995 bar tee dark",
    price: 99.5,
    salePrice: 0,
    custom1Name: "Size",
    custom1Options: "sm|med|lg|xl",
  },
  {
    description: "Dark mode t-shirts should cost more. Change my mind.",
    imgUrl: "/assets/shop/shirts/995-square-tee-black.jpg",
    itemId: "995-square-tee-black",
    itemUrl: "/shop",
    name: "995 square tee dark",
    price: 99.5,
    salePrice: 0,
    custom1Name: "Size",
    custom1Options: "sm|med|lg|xl",
  },
  {
    itemId: "placeholder",
  },
]
