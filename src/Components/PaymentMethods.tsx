import React from 'react';
import { User, PaymentMethod } from '../Interfaces/User';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

interface PaymentMethodsProps {
  user: User;
  onAddPaymentMethod: () => void;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({ user, onAddPaymentMethod }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Payment Methods
      </Typography>
      <List>
        {user.paymentMethods.map((method:any) => (
          <ListItem key={method.id}>
            <ListItemText
              primary={method.type}
              secondary={method.details}
            />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" onClick={onAddPaymentMethod}>
        Add Payment Method
      </Button>
    </Container>
  );
};

export default PaymentMethods;
