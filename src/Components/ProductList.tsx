import React from 'react';
import { List, ListItem, ListItemText, IconButton, Grid } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { Product1 } from '../Interfaces/Product';


interface ProductListProps {
  products: Product1[];
  onEdit: (product: Product1) => void;
  onDelete: (productId: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onEdit, onDelete }) => {
  return (
    <List>
      {products.map((product) => (
        <ListItem key={product.id}>
          <Grid container alignItems="center">
            <Grid item xs={8}>
              <ListItemText primary={product.name} secondary={`$${product.price} - ${product.category}`} />
            </Grid>
            <Grid item xs={2}>
              <IconButton onClick={() => onEdit(product)}>
                <Edit />
              </IconButton>
            </Grid>
            <Grid item xs={2}>
              <IconButton onClick={() => onDelete(product.id)}>
                <Delete />
              </IconButton>
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductList;
