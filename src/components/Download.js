import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import download from '../assets/download.jpg'
import download1 from '../assets/download1.jpg'
import apple from '../assets/apple.svg'
import windows from '../assets/windows.svg'


// Define the Item component
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const containerStyle = {
    background: 'linear-gradient(to bottom, rgba(32, 17, 17, 0.6) 0%, rgba(255, 255, 255, 0.296) 100%)',
    height: '100%',
    width:'100%', 
    color: 'white', 
    flexGrow: 1 
  };
 

export default function BasicGrid() {
  return (
    
    <Box sx={containerStyle } >
      <Grid container spacing={2} >
        <Grid item xs={8} >
          <Item sx={{height:'300px'}}><h1 >Designed for connection</h1>
            Link your Account with your preferred gaming platforms to effortlessly import friends lists and enjoy collaborative gameplay.</Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{height:'300px'}}> <img src={download} alt="image 1" style={{ width: '100%', height:'100%' }} /></Item>
        </Grid>
        <Grid item xs={4}>
        <Item sx={{height:'300px'}}> <img src={download1} alt="image 1" style={{ width: '100%', height:'100%' }} /></Item>
        </Grid>
        <Grid item xs={8}>
          <Item sx={{height:'300px'}}><h1>Exploration in the palm of your hand</h1>Discover the latest releases from your friends, explore EA's newest games, and effortlessly add them to your gaming collection with just a few clicks.</Item>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button variant="contained" style={{ backgroundColor: '#605F62', color: 'white', marginRight: '30px',width:'250px', fontWeight:"600" }}>
          <img src={apple} alt="apple" style={{ width: '50px', margin: '5px',  }} /> Apple
          </Button>
          <Button variant="contained" style={{ backgroundColor: '#605F62', color: 'white',width:'250px',fontWeight:"600" }}>
          <img src={windows} alt="windows" style={{ width: '30px', margin: '10px' , marginRight:'15px' }} /> Windows
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
