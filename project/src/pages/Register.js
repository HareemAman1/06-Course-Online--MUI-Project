import React, { useState } from 'react'
import Layout from '../components/Layout'
import { TextField, Button, Box, Typography } from '@mui/material'


const Register = () => {

  const [input, setinput] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    password: ''
});

// CHANGE 
const handlechange = (e) => {
    setinput((prevState)=> ({
        ...prevState,
        [e.target.name] : [e.target.value]
    }))
}

// SUBMIT 
const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input);
    alert('Registered successfully');
    setinput({fname:"", lname:"",phone:"",email:"",password:""})
}
  return (
    <Layout>
        <Box sx={{my:2, textAlign:'center', 
        '& h3':{fontWeight:'bold', marginLeft:"30px"}}}>
        <Typography variant='h3'>Register now</Typography>
        <form onSubmit={handleSubmit}>
        <TextField name='fname' type='text' placeholder='First name' value={input.fname} onChange={handlechange} variant='outlined' sx={{margin: '20px', marginRight:'0px', width:'250px'}}></TextField>
        <TextField name='lname' type='text' placeholder='Last name' value={input.lname} onChange={handlechange} variant='outlined' sx={{margin: '20px', width:'250px'}}></TextField><br />
        <TextField name='phone' type='text' placeholder='phone' value={input.phone} onChange={handlechange} variant='outlined' sx={{margin: '20px', width:'500px'}}></TextField><br />
        <TextField name='email' type='email' placeholder='email' value={input.email} onChange={handlechange} variant='outlined' sx={{margin: '20px', width:'500px'}}></TextField><br />
        <TextField name='password' type='password' placeholder='password' value={input.password} onChange={handlechange} variant='outlined' sx={{margin: '20px', width:'500px'}}></TextField>

        <br />

        <Button type='submit' variant='contained' sx={{margin: '20px'}}>Submit</Button>
    </form>
        </Box>
    </Layout>
  )
}

export default Register