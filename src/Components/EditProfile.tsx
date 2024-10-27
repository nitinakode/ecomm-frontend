import React, { useState } from 'react';
import { User, Address } from '../Interfaces/User';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';

interface EditProfileProps {
  user: User;
  onSave: (updatedUser: User) => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ user, onSave }) => {
  const [updatedUser, setUpdatedUser] = useState<User>(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(updatedUser);
    console.log(updatedUser);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Edit Profile
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            name="firstName"
            fullWidth
            value={updatedUser.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            name="lastName"
            fullWidth
            value={updatedUser.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            value={updatedUser.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            fullWidth
            value={updatedUser.phoneNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Address</Typography>
          <TextField
            label="Street"
            name="street"
            fullWidth
            value={updatedUser.address.street}
            onChange={(e) => setUpdatedUser({
              ...updatedUser,
              address: { ...updatedUser.address, street: e.target.value },
            })}
          />
          <TextField
            label="City"
            name="city"
            fullWidth
            value={updatedUser.address.city}
            onChange={(e) => setUpdatedUser({
              ...updatedUser,
              address: { ...updatedUser.address, city: e.target.value },
            })}
          />
          <TextField
            label="State"
            name="state"
            fullWidth
            value={updatedUser.address.state}
            onChange={(e) => setUpdatedUser({
              ...updatedUser,
              address: { ...updatedUser.address, state: e.target.value },
            })}
          />
          <TextField
            label="Zip Code"
            name="zipCode"
            fullWidth
            value={updatedUser.address.zipCode}
            onChange={(e) => setUpdatedUser({
              ...updatedUser,
              address: { ...updatedUser.address, zipCode: e.target.value },
            })}
          />
          <TextField
            label="Country"
            name="country"
            fullWidth
            value={updatedUser.address.country}
            onChange={(e) => setUpdatedUser({
              ...updatedUser,
              address: { ...updatedUser.address, country: e.target.value },
            })}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditProfile;
