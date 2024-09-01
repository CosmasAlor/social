'use client'

import { Paper, TextField, Button, CircularProgress } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import { login } from '@/redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { storeDispatch, storeState } from '@/redux/store'; // Ensure correct import
import { useRouter } from 'next/navigation';

export default function Login() {
  const dispatch = useDispatch<storeDispatch>();
  const { push } = useRouter();
  
 const {isLoading} = useSelector((state:storeState) => state.authReducer)
  
  const { handleSubmit, handleChange, values, setErrors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        // Dispatch the login action
        await dispatch(login(values)).unwrap(); // Ensure proper error handling
        if (localStorage.getItem('token')) {
          push('/'); // Navigate to the home page on successful login
          console.log('ggggggggg');
          
        }
      } catch (error: any) {
        // Handle login errors, e.g., display error messages
console.log(error);

      }
    },
  });

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Paper elevation={5} sx={{ p: 3, m: 3, width: '50%' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <h2>Login Page</h2>

          <TextField
            id="email"
            name="email"
            label="Email"
            variant="standard"
            onChange={handleChange}
            value={values.email}
            sx={{ mb: 2 }}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="standard"
            onChange={handleChange}
            value={values.password}
          />

{!isLoading?
          <Button variant="contained" disableElevation sx={{ m: 3 }} type="submit">
          Login
        </Button>
:
<Button variant="contained" disableElevation sx={{ m: 3 }} type="button">
<CircularProgress color='info'></CircularProgress>
</Button>
}



        </form>
      </Paper>
    </div>
  );
}
