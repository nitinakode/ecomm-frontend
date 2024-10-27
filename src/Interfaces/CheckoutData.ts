export interface CheckoutData {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    zipCode: string;
    country: string;
    paymentMethod: 'Credit Card' | 'PayPal';
    cardNumber?: string;
    expirationDate?: string;
    cvv?: string;
  }
  