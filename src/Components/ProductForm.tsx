import React from 'react';
import { Button, TextField, Grid, Typography } from '@mui/material';
import { Product1 } from '../Interfaces/Product';

interface ProductFormProps {
  initialProduct?: Product1;
  onSave: (product: Product1) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ initialProduct, onSave }) => {
  const [product, setProduct] = React.useState<Product1>(
    initialProduct || {
      id: 0,
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      imageUrl: '',
      category: '',
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(product);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Product Form</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Name" name="name" value={product.name} onChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Description" name="description" value={product.description} onChange={handleChange} />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Price" name="price" type="number" value={product.price} onChange={handleChange} />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Quantity" name="quantity" type="number" value={product.quantity} onChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Image URL" name="imageUrl" value={product.imageUrl} onChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Category" name="category" value={product.category} onChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>Save Product</Button>
      </Grid>
    </Grid>
  );
};

export default ProductForm;
