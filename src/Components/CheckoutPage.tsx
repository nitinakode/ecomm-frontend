import React, { useState } from 'react';

import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { CheckoutData } from '../Interfaces/CheckoutData';

const CheckoutPage: React.FC = () => {
  const [checkoutData, setCheckoutData] = useState<CheckoutData>({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    paymentMethod: 'Credit Card',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCheckoutData({ ...checkoutData, [e.target.name]: e.target.value });
  };
  const handleSelectChange = (e:any) => {
    setCheckoutData({ ...checkoutData, paymentMethod: e.target.value as "Credit Card" | "PayPal" });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit checkout data to server or handle checkout logic
    console.log(checkoutData);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="First Name"
              name="firstName"
              fullWidth
              value={checkoutData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Last Name"
              name="lastName"
              fullWidth
              value={checkoutData.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Address"
              name="address"
              fullWidth
              value={checkoutData.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="City"
              name="city"
              fullWidth
              value={checkoutData.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Zip Code"
              name="zipCode"
              fullWidth
              value={checkoutData.zipCode}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Country"
              name="country"
              fullWidth
              value={checkoutData.country}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Payment Method</InputLabel>
              <Select
                value={checkoutData.paymentMethod}
                name={checkoutData.paymentMethod}
                onChange={handleSelectChange}
              >
                <MenuItem value="Credit Card">Credit Card</MenuItem>
                <MenuItem value="PayPal">PayPal</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {checkoutData.paymentMethod === 'Credit Card' && (
            <>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Card Number"
                  name="cardNumber"
                  fullWidth
                  value={checkoutData.cardNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  label="Expiration Date"
                  name="expirationDate"
                  fullWidth
                  value={checkoutData.expirationDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  label="CVV"
                  name="cvv"
                  fullWidth
                  value={checkoutData.cvv}
                  onChange={handleChange}
                />
              </Grid>
            </>
          )}
        </Grid>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ mt: 3 }}
        >
          Place Order
        </Button>
      </form>
    </Container>
  );
};

export default CheckoutPage;
