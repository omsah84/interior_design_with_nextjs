"use client"; // This makes the component client-side

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import Image from 'next/image'; // To render images in Next.js
import logo from "@/public/assets/logo.png";

const pages = [
  { name: 'Interiors', href: '/interiors' },
  { name: 'Design Ideas', href: '/design-ideas' },
  { name: 'Magazine', href: '/magazine' },
  { name: 'Interiorcafe TV', href: '/interiorcafe-tv' },
  { name: 'Cities', href: '/cities' },
  { name: 'Store Locator', href: '/store-locator' },
  { name: 'More', href: '/more' },
];

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
          <ListItem key={page.name} component={Link} href={page.href} passHref>
            <ListItemText
              primaryTypographyProps={{ fontWeight: 'bold' }} // Making sidebar text bold
              primary={page.name}
            />
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
          <Box sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, cursor: 'pointer' }}>
            <Link href="/" passHref>
              <Image src={logo} alt="LOGO" width={150} height={40} priority={true} />
            </Link>
          </Box>

          {/* Logo for smaller screens (on the left) */}
          <Box sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <Link href="/" passHref>
              <Image src={logo} alt="LOGO" width={120} height={30} priority={true} />
            </Link>
          </Box>

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
              <Button
                key={page.name}
                component={Link}
                href={page.href}
                sx={{ my: 2, color: 'black', display: 'block', fontWeight: 'bold' }} // Making AppBar text bold
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
