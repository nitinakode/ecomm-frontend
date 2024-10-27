import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { CartItem } from '../Interfaces/CartItem';

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Sample data, replace with your actual cart items
    {
      id: 1,
      name:"",
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      qunatity:0,
      rating: {
        rate: 3.9,
        count: 120,
      },
      quantity: 1,
    },
    {
        id: 2,
        name:"",
        qunatity:0,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
        quantity: 1,
      },
  ]);

  const handleQuantityChange = (itemId: number, change: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + change }
          : item
      )
    );
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      <Grid container spacing={4}>
        {cartItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  ${item.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Quantity: {item.quantity}
                </Typography>
                <div>
                  <IconButton
                    onClick={() => handleQuantityChange(item.id, -1)}
                    disabled={item.quantity <= 1}
                  >
                    <Remove />
                  </IconButton>
                  <IconButton onClick={() => handleQuantityChange(item.id, 1)}>
                    <Add />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" gutterBottom>
        Total: ${totalAmount.toFixed(2)}
      </Typography>
      <Button variant="contained" color="primary" href="/checkout">
        Proceed to Checkout
      </Button>
    </Container>
  );
};

export default CartPage;
