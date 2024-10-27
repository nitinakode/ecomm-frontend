import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { User1 } from '../Interfaces/User';


const defaultUser: User1 = {
    userName:"",
    email:"",
    password:"",
    createdDate:new Date(),
    updatedDate:new Date(),
}
function Login() {
    const[user,setUser]=useState<User1>(defaultUser);
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
      };

    const handleOnSubmit=()=>
    {
        console.log(user)
    }



    
  return (
 <>
 <TextField id="outlined-basic" label="Outlined" variant="outlined" value={user.email} onChange={handleOnChange} name='email'/>
 <TextField id="outlined-basic" label="Outlined" variant="outlined" value={user.password} onChange={handleOnChange} name='password'/>
 <Button name="submit" className="Login" onClick={handleOnSubmit} >Log In</Button>
 
 </>
  )
}

export default Login