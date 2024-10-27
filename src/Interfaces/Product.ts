export interface Product {
    name:string;
    id: number;
    qunatity:0;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  export interface Product1 {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    imageUrl: string;
    category: string;
  }
  
  // Sample Product JSON
  export const sampleProducts: Product1[] = [
    {
      id: 1,
      name: "Apple iPhone 14",
      description: "Latest model of Apple iPhone with A15 Bionic chip",
      price: 999,
      quantity: 50,
      imageUrl: "https://example.com/iphone14.jpg",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Samsung Galaxy S22",
      description: "Newest Samsung flagship with powerful performance",
      price: 899,
      quantity: 30,
      imageUrl: "https://example.com/galaxys22.jpg",
      category: "Electronics",
    },
    {
      id: 3,
      name: "Sony WH-1000XM4 Headphones",
      description: "Noise-cancelling over-ear headphones",
      price: 349,
      quantity: 100,
      imageUrl: "https://example.com/sonyheadphones.jpg",
      category: "Accessories",
    },
  ];
  