import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, IconButton, Typography, AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import BookIcon from '@mui/icons-material/Book';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import logo from '../assets/logo.jpg';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    width: 240,
    '& .MuiDrawer-paper': {
        width: 240,
        backgroundColor: '#222',
        color: 'white',
        padding: theme.spacing(2),
        borderRadius: '16px 0 0 16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
    color: '#FF5722',
    '&:hover': {
        backgroundColor: '#555',
        color: '#FFEB3B',
    },
    '& .MuiListItemText-primary': {
        fontSize: '1.1rem',
        fontWeight: 500,
    },
}));

const StyledLink = styled(Link)(({ theme }) => ({
    color: '#FFA500',
    textDecoration: 'none',
    fontSize: '18px',
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
        backgroundColor: '#FFEB3B',
        color: '#222',
    },
}));

const Header = () => {
    const [open, setOpen] = useState(false); // State to toggle the drawer
    const handleDrawerToggle = () => setOpen(!open); // Toggle drawer open/close
    return (
        <>
            {/* AppBar with logo, title, and links */}
            <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #0D0D0D, #333)', height: 64 }}>
                <Toolbar>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={logo} alt='logo' style={{ height: "2.5rem", borderRadius: '50%', marginRight: '0.5rem' }} />
                    </Link>
                    <Typography variant="h6" sx={{ flexGrow: 1, color: '#f56d18', fontSize: '20px', fontWeight: 700, fontStyle: 'italic' }}>
                        ASAP Restaurant
                    </Typography>
                    <StyledLink to="/menu">Menu</StyledLink>
                    <StyledLink to="/contact">Contact</StyledLink>
                    <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Side Drawer for mobile menu */}
            <StyledDrawer anchor="right" open={open} onClose={handleDrawerToggle}>
                <List>
                    {/* Drawer menu items */}
                    {[
                        { text: 'Home', icon: <HomeIcon />, path: '/' },
                        { text: 'Menu', icon: <RestaurantMenuIcon />, path: '/menu' },
                        { text: 'Book a Table', icon: <BookIcon />, path: '/book-table' },
                        { text: 'Contact', icon: <ContactMailIcon />, path: '/contact' }
                    ].map(({ text, icon, path }) => (
                        <StyledListItem button component={Link} to={path} onClick={handleDrawerToggle} key={text}>
                            {icon}
                            <ListItemText primary={text} />
                        </StyledListItem>
                    ))}
                </List>
            </StyledDrawer>
        </>
    );
};

export default Header;
