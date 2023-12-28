import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import {Link, useLocation} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import MenuIcon from '@mui/icons-material/Menu';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import DownloadIcon from '@mui/icons-material/Download';
import GamesIcon from '@mui/icons-material/Games';
import { IconButton } from '@mui/material';
import logo from '../assets/Logo.svg';
import LoginIcon from '@mui/icons-material/Login';

export default function NavBar(props) {
    const {drawerWidth, content} = props
    const location = useLocation()
    const path = location.pathname

    const [open, setOpen] = React.useState(false);

    const changeOpenStatus = () => {
        setOpen(!open)
    }

    const myDrawer = (
        <div>
         <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/" selected={"/" === path}>
                  <ListItemIcon>
                   <HomeIcon sx={{color:'#ffffff'}} />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItemButton>
              </ListItem>
              
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/games" selected={"/games" === path}>
                  <ListItemIcon>
                   <GamesIcon  sx={{color:'#ffffff'}} />
                  </ListItemIcon>
                  <ListItemText primary={"Games"} />
                </ListItemButton>
              </ListItem>
   
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/about" selected={"/about" === path}>
                  <ListItemIcon>
                   <InfoIcon  sx={{color:'#ffffff'}} />
                  </ListItemIcon>
                  <ListItemText primary={"About"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to="/create" selected={"/create" === path}>
                  <ListItemIcon>
                   <BorderColorIcon sx={{color:'#ffffff'}}  />
                  </ListItemIcon>
                  <ListItemText primary={"Create"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to="/tabledata" selected={"/tabledata" === path}>
                  <ListItemIcon>
                   <BackupTableIcon sx={{color:'#ffffff'}} />
                  </ListItemIcon>
                  <ListItemText primary={"Table"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to="/download" selected={"/download" === path}>
                  <ListItemIcon>
                   <DownloadIcon sx={{color:'#ffffff'}} />
                  </ListItemIcon>
                  <ListItemText primary={"Download"} />
                </ListItemButton>
              </ListItem>
          </List>
        
        </Box>
        </div>
    )
    
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 , 
        backgroundColor:'rgba(25, 25, 25, 0.90)',

        }}> 
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton 
            color="inherit"
            onClick={changeOpenStatus}
            sx={{mr:2, display:{sm:"none"}}}
            >
                
             <MenuIcon />
            </IconButton>

          <Typography variant="h6" noWrap component="div">
          <img src={logo} alt="Logo" style={{ width: '180px', margin: '15px',  }} />
          </Typography>
          <div sx={{ display: 'flex', alignItems: 'center',  marginLeft: 'auto' }}>
            <IconButton color="inherit" component={Link} to="/firebaseauth">
              <LoginIcon />
            </IconButton>
          </div>


        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          display:{xs:"none", sm:"block"},  
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box',  backgroundColor:'rgba(21, 21, 21, 0.721)', color:'#ffffff'
        
        },
          
        }}
      >
        {myDrawer}
      </Drawer>

      <Drawer
        variant="temporary"
        open = {open}
        onClose = {changeOpenStatus}
        sx={{
          display:{xs:"block", sm:"none"},  
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box',  backgroundColor:'rgba(21, 21, 21, 0.721)', color:'#ffffff'},
        }}
      >
        {myDrawer}
      </Drawer>

     

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
       {content}
      </Box>
    </Box>
  );
}