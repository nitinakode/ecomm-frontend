export interface User1{
    userName:string,
    email:string,
    password:string,
    createdDate:Date,
    updatedDate:Date,
    

}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: Address;
    paymentMethods: PaymentMethod[];
  }
  
  export interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  }
  
  export interface PaymentMethod {
    id: number;
    type: 'Credit Card' | 'PayPal';
    details: string; // e.g., masked credit card number or PayPal email
  }
  