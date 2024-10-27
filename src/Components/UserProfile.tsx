import React from 'react';

import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { User } from '../Interfaces/User';

interface UserProfileProps {
  user: User;
  onEditProfile: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onEditProfile }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Profile
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">{`${user.firstName} ${user.lastName}`}</Typography>
          <Typography variant="body1">{user.email}</Typography>
          <Typography variant="body1">{user.phoneNumber}</Typography>
          <Typography variant="h6" gutterBottom>
            Address
          </Typography>
          <Typography variant="body1">{user.address.street}</Typography>
          <Typography variant="body1">{`${user.address.city}, ${user.address.state} ${user.address.zipCode}`}</Typography>
          <Typography variant="body1">{user.address.country}</Typography>
          <Button variant="contained" color="primary" onClick={onEditProfile} sx={{ mt: 2 }}>
            Edit Profile
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default UserProfile;
