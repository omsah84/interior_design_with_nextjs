"use client"; // This makes the component client-side

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const pages = ['Interiors', 'Design Ideas', 'Magazine','Interiorcafe TV','Cities','Store Locator', 'More'];

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const renderSidebar = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {pages.map((page) => (
          <ListItem button key={page}>
            <ListItemText primary={page} />
          </ListItem>
        ))}  
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 40, sm: 48 }, // Adjust minHeight based on screen size
            height: { xs: 40, sm: 48 }, // Set fixed height for the Toolbar
            px: { xs: 1, sm: 2 }, // Add some padding to the sides
          }}
        >
          {/* Logo for larger screens */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          {/* Logo for smaller screens (on the left) */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          {/* Responsive menu (hamburger) on the right */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton size="large" aria-label="menu" onClick={toggleDrawer(true)} color="inherit">
              <MenuIcon sx={{ color: 'black' }} />
            </IconButton>
            {/* Sidebar Drawer that opens from the left */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              {renderSidebar}
            </Drawer>
          </Box>

          {/* Menu for larger screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start' }}>
            {pages.map((page) => (
              <Button key={page} onClick={toggleDrawer(false)} sx={{ my: 2, color: 'black', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
