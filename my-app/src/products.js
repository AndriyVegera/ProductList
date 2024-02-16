import product1 from "./assets/products/1.png";
import product2 from "./assets/products/2.png";
import product3 from "./assets/products/3.png";
import product4 from "./assets/products/4.png";
import product5 from "./assets/products/5.png";
import product6 from "./assets/products/6.webp";
import product7 from "./assets/products/7.webp";
import product8 from "./assets/products/8.webp";

export const PRODUCTS = [
  {
    id: 1,
    productName: "IPhone",
    price: 999.0,
    productImage: product1,
    count: 4,
    size: {
      width: 200,
      height: 200
    },
    weight: "200g",
    comments: [
      {
        id: 1,
        productId: 1,
        description: "some text here",
        date: "14:00 22.08.2021"
      },
      {
        id: 2,
        productId: 1,
        description: "another comment",
        date: "15:00 22.08.2021"
      }
    ]
  },
  {
    id: 2,
    productName: "Macbook Pro 2022 (M1)",
    price: 1999.0,
    productImage: product2,
    count: 3,
    size: {
      width: 1800,
      height: 600
    },
    weight: "2200g",
    comments: [
      {
        id: 3,
        productId: 2,
        description: "some text here",
        date: "14:00 22.08.2021"
      },
      {
        id: 4,
        productId: 2,
        description: "another comment",
        date: "15:00 22.08.2021"
      }
    ]
  },
  {
    id: 3,
    productName: "Cannon M50 Camera",
    price: 699.0,
    productImage: product3,
    count: 4,
    size: {
      width: 200,
      height: 200
    },
    weight: "200g",
    comments: [
      {
        id: 5,
        productId: 1,
        description: "some text here",
        date: "14:00 22.08.2021"
      },
      {
        id: 6,
        productId: 1,
        description: "another comment",
        date: "15:00 22.08.2021"
      }
    ]
  },
  {
    id: 4,
    productName: "WLS Van Gogh Denim Jacket",
    price: 228.0,
    productImage: product4,
  },
  {
    id: 5,
    productName: "LED Light Strips",
    price: 19.99,
    productImage: product5,
    count: 4,
    size: {
      width: 200,
      height: 200
    },
    weight: "200g",
    comments: [
      {
        id: 1,
        productId: 1,
        description: "some text here",
        date: "14:00 22.08.2021"
      },
      {
        id: 2,
        productId: 1,
        description: "another comment",
        date: "15:00 22.08.2021"
      }
    ]
  },
  {
    id: 6,
    productName: "SPECTRUM LS TEE",
    price: 68.0,
    productImage: product6,
    count: 4,
    size: {
      width: 200,
      height: 200
    },
    weight: "200g",
    comments: [
      {
        id: 1,
        productId: 1,
        description: "some text here",
        date: "14:00 22.08.2021"
      },
      {
        id: 2,
        productId: 1,
        description: "another comment",
        date: "15:00 22.08.2021"
      }
    ]
  },
  {
    id: 7,
    productName: "AUTO SERVICE SHIRT by GOLF WANG",
    price: 120.0,
    productImage: product7,
    count: 4,
    size: {
      width: 200,
      height: 200
    },
    weight: "200g",
    comments: [
      {
        id: 1,
        productId: 1,
        description: "some text here",
        date: "14:00 22.08.2021"
      },
      {
        id: 2,
        productId: 1,
        description: "another comment",
        date: "15:00 22.08.2021"
      }
    ]
  },
  {
    id: 8,
    productName: "DON'T TRIP UNSTRUCTURED HAT",
    price: 40.0,
    productImage: product8,
    count: 4,
    size: {
      width: 200,
      height: 200
    },
    weight: "200g",
    comments: [
      {
        id: 1,
        productId: 1,
        description: "some text here",
        date: "14:00 22.08.2021"
      },
      {
        id: 2,
        productId: 1,
        description: "another comment",
        date: "15:00 22.08.2021"
      }
    ]
  },
];
