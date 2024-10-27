import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider } from '@mui/material';
import { Menu, Home, Category, AccountCircle, ShoppingCart } from '@mui/icons-material';

const categories = [
  { text: 'Home', icon: <Home /> },
  { text: 'Categories', icon: <Category /> },
  { text: 'Account', icon: <AccountCircle /> },
  { text: 'Cart', icon: <ShoppingCart /> },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  const list = () => (
    <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {categories.map((category, index) => (
          <ListItem button key={category.text}>
            <ListItemIcon>{category.icon}</ListItemIcon>
            <ListItemText primary={category.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Your Orders', 'Your Wishlist', 'Settings'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
        <Menu />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
};

export default Sidebar;
