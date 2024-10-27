import React, { useState } from 'react';
import { User } from '../Interfaces/User';
import UserProfile from './UserProfile';
import EditProfile from './EditProfile';
import PaymentMethods from './PaymentMethods';

interface UserAccountProps {
  user: User;
  onUpdateUser: (updatedUser: User) => void;
  onAddPaymentMethod: () => void;
}

const UserAccount: React.FC<UserAccountProps> = ({ user, onUpdateUser, onAddPaymentMethod }) => {
  const [editing, setEditing] = useState(false);

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleSaveProfile = (updatedUser: User) => {
    onUpdateUser(updatedUser);
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <EditProfile user={user} onSave={handleSaveProfile} />
      ) : (
        <UserProfile user={user} onEditProfile={handleEditProfile} />
      )}
      <PaymentMethods user={user} onAddPaymentMethod={onAddPaymentMethod} />
    </div>
  );
};

export default UserAccount;
