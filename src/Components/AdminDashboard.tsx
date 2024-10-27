
import React from 'react';
import { Product1, sampleProducts } from '../Interfaces/Product';
import { SalesData, sampleSalesData } from '../Interfaces/SalesData';
import ProductForm from './ProductForm';
import Dashboard from './Dashboard.tsx';

const AdminDashboard: React.FC = () => {
  const [products, setProducts] = React.useState<Product1[]>(sampleProducts);
  const [salesData, setSalesData] = React.useState<SalesData[]>(sampleSalesData);
  const [editingProduct, setEditingProduct] = React.useState<Product1 | null>(null);

  const handleSaveProduct = (product: Product1) => {
    if (product.id === 0) {
      setProducts([...products, { ...product, id: products.length + 1 }]);
    } else {
      setProducts(products.map((p) => (p.id === product.id ? product : p)));
    }
    setEditingProduct(null);
  };

  const handleEditProduct = (product: Product1) => {
    setEditingProduct(product);
  };

  const handleDeleteProduct = (productId: number) => {
    setProducts(products.filter((p) => p.id !== productId));
  };

  return (
    <div>
      <Dashboard
        salesData={salesData}
        products={products}
        onEditProduct={handleEditProduct}
        onDeleteProduct={handleDeleteProduct}
      />
      {editingProduct && <ProductForm initialProduct={editingProduct} onSave={handleSaveProduct} />}
    </div>
  );
};

export default AdminDashboard;
