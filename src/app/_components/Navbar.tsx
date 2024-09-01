import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { storeDispatch, storeState } from '@/redux/store';
import { clearToken } from '@/redux/authSlice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


  export default function Navbar() {

    let router = useRouter();
    let {token} = useSelector((state : storeState)=> state.authReducer);
    let dispatch = useDispatch<storeDispatch>()
   function navigate(path:string) {
     router.push(path)
   }
  
function logOut() {

  navigate('/login');
  localStorage.removeItem('token');
  dispatch(clearToken());
}


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link href={'/'}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Social
          </Typography>
          </Link>
         
         {!token ? <>
          <Button color="inherit" onClick={()=> navigate('/login') }>Login</Button>
          
         </> : <>
         <Button color="inherit" onClick={logOut}>Logout</Button>
         <Button color="inherit" onClick={()=> navigate('/profile') }>Profile</Button>
         </>

         }

         

        </Toolbar>
      </AppBar>
    </Box>
  );
}


