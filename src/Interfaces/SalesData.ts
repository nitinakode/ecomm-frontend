export interface SalesData {
    productId: number;
    productName: string;
    sales: number;
    date: string;
  }
  
  // Sample SalesData JSON
  export const sampleSalesData: SalesData[] = [
    {
      productId: 1,
      productName: "Apple iPhone 14",
      sales: 150,
      date: "2024-08-01",
    },
    {
      productId: 2,
      productName: "Samsung Galaxy S22",
      sales: 120,
      date: "2024-08-02",
    },
    {
      productId: 3,
      productName: "Sony WH-1000XM4 Headphones",
      sales: 80,
      date: "2024-08-03",
    },
  ];
  