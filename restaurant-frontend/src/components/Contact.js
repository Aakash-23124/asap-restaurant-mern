import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography, Paper, Button, Box } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Grid from '@mui/material/Grid';

// Define custom color shades
const backgroundColor = '#121212'; // Very Dark Grey
const accentColor = '#FF5722'; // Orange
const secondaryColor = '#03A9F4'; // Light Blue
const textColor = '#E0E0E0'; // Light Grey
const borderColor = '#333'; // Darker Grey

// Global styles for the entire page
const GlobalStyle = styled('div')(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: textColor,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
}));

const FlexContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
}));

const SectionContainer = styled(Container)(({ theme }) => ({
    backgroundColor: '#1c1c1c', 
    padding: theme.spacing(4),
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.5)',
    color: textColor,
    marginTop: theme.spacing(4),
    flex: 1,
    minWidth: '300px',
    maxWidth: '100%',
}));

const ContactItem = styled(Paper)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3),
    margin: theme.spacing(2, 0),
    backgroundColor: '#2c2c2c', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
    borderRadius: '8px',
    border: `1px solid ${borderColor}`,
    transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.6)',
        backgroundColor: '#3c3c3c', 
    },
}));

const IconWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: accentColor,
    color: '#fff',
    marginRight: theme.spacing(2),
    transition: 'background-color 0.3s',
    '&:hover': {
        backgroundColor: '#FF3D00',
    },
}));

const ContactText = styled(Typography)(({ theme }) => ({
    color: textColor,
    fontWeight: '500',
    fontSize: '1.1rem',
    lineHeight: 1.5,
    textAlign: 'left',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
}));

const SocialMediaItem = styled(Button)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1.5),
    margin: theme.spacing(1),
    backgroundColor: '#2c2c2c',
    color: textColor,
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
    transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
    '&:hover': {
        backgroundColor: '#db7807',
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.6)',
    },
    '& svg': {
        marginRight: theme.spacing(1),
    },
}));

const Contact = () => {
    return (
        <GlobalStyle>
            <FlexContainer>
                <SectionContainer>
                    <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', fontSize: '2rem', borderBottom: `2px solid ${accentColor}`, paddingBottom: '1rem' }}>
                        Get in Touch
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <ContactItem>
                                <IconWrapper>
                                    <MailOutlineIcon fontSize="inherit" />
                                </IconWrapper>
                                <Box sx={{ flex: 1 }}>
                                    <ContactText variant="body1">Email: info@restaurant.com</ContactText>
                                </Box>
                            </ContactItem>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ContactItem>
                                <IconWrapper>
                                    <PhoneIcon fontSize="inherit" />
                                </IconWrapper>
                                <Box sx={{ flex: 1 }}>
                                    <ContactText variant="body1">Phone: +123 456 7890</ContactText>
                                </Box>
                            </ContactItem>
                        </Grid>
                        <Grid item xs={12}>
                            <ContactItem>
                                <IconWrapper>
                                    <LocationOnIcon fontSize="inherit" />
                                </IconWrapper>
                                <Box sx={{ flex: 1 }}>
                                    <ContactText variant="body1">Address: PVPSIT, Vijayawada, Andhra Pradesh, India</ContactText>
                                </Box>
                            </ContactItem>
                        </Grid>
                    </Grid>
                    <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: '2rem', borderBottom: `2px solid ${secondaryColor}`, paddingBottom: '1rem' }}>
                        Follow Us
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item>
                            <SocialMediaItem startIcon={<FacebookIcon />}>Facebook</SocialMediaItem>
                        </Grid>
                        <Grid item>
                            <SocialMediaItem startIcon={<InstagramIcon />}>Instagram</SocialMediaItem>
                        </Grid>
                        <Grid item>
                            <SocialMediaItem startIcon={<TwitterIcon />}>Twitter</SocialMediaItem>
                        </Grid>
                    </Grid>
                </SectionContainer>

                <SectionContainer>
                    <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', fontSize: '2rem', borderBottom: `2px solid ${accentColor}`, paddingBottom: '1rem' }}>
                        Find Us Here
                    </Typography>
                    <Box sx={{ height: '400px', width: '100%' }}>
                    <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3492710242226!2d80.6915579!3d16.4876606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb3d5f7810a9%3A0x4a6d6804b71db09!2sPrasad%20V.%20Potluri%20Siddhartha%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1711456789123!5m2!1sen!2sin"
            width="100%"
            height="500px"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps embed of PVP Siddhartha Institute of Technology"
        ></iframe>
                    </Box>
                </SectionContainer>
            </FlexContainer>
        </GlobalStyle>
    );
};

export default Contact;
