import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import SalesChart from './SalesChart';
import ProductList from './ProductList';
import { Product1} from '../Interfaces/Product';
import { SalesData } from '../Interfaces/SalesData';

interface DashboardProps {
  salesData: SalesData[];
  products: Product1[];
  onEditProduct: (product: Product1) => void;
  onDeleteProduct: (productId: number) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ salesData, products, onEditProduct, onDeleteProduct }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper>
          <Typography variant="h6">Sales Overview</Typography>
          <SalesChart salesData={salesData} />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <Typography variant="h6">Product Management</Typography>
          <ProductList products={products} onEdit={onEditProduct} onDelete={onDeleteProduct} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
