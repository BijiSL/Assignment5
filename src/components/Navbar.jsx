import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const submitHandler=()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
   .then((res)=>{
       console.log(res);
   }).catch((err)=>{
       alert(`data added to db with ${res.data.id}`)
   });
  }
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left'>
            Employee_App Front_end
          </Typography>
          <Button color="inherit" component={Link} to="/d" >Home</Button>
          <Button color="inherit" component={Link} to="/f" >Employee Form</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar