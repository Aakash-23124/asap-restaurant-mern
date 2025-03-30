import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { keyframes } from '@emotion/react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Keyframes for the slide-in animation
const slideIn = keyframes`
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

// Styled components
const BackgroundBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${require('../assets/book1.jpg')})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '93.8vh',
  width: '100vw',
  position: 'absolute',
  right: 0,
  top: 0,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: theme.spacing(3),
}));

const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(4),
  boxShadow: theme.shadows[5],
  maxWidth: '400px',
  width: '100%',
  margin: theme.spacing(4),
  animation: `${slideIn} 0.6s ease-out`,
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: theme.spacing(3),
}));

export default function BookTable() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      switch (name) {
        case 'name':
          newErrors.name = value.length <= 50 ? '' : 'Name should not exceed 50 characters.';
          break;
        case 'email':
          newErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address.';
          break;
        case 'date':
          newErrors.date = value >= new Date().toISOString().split('T')[0] ? '' : 'Date cannot be in the past.';
          break;
        case 'guests':
          newErrors.guests = (value >= 1 && value <= 20) ? '' : 'Guests should be between 1 and 20.';
          break;
        default:
          break;
      }
      return newErrors;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {
      name: formData.name ? (formData.name.length > 50 ? 'Name should not exceed 50 characters.' : '') : 'Name is required.',
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? '' : 'Invalid email address.',
      date: formData.date >= new Date().toISOString().split('T')[0] ? '' : 'Date cannot be in the past.',
      guests: (formData.guests >= 1 && formData.guests <= 20) ? '' : 'Guests should be between 1 and 20.',
    };

    if (Object.values(validationErrors).some((error) => error)) {
      setErrors(validationErrors);
      return;
    }

    try {
      // change URL 
      await axios.post('https://asap-restaurant-mern.onrender.com/api/book-table', formData);
      toast.success('Table booked successfully!');
      setFormData({ name: '', email: '', date: '', time: '', guests: '' });
    } catch (error) {
      console.error('Error booking the table:', error);
      toast.error('Error booking the table. Please try again.');
    }
  };

  return (
    <>
      <BackgroundBox>
        <FormContainer component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Typography variant="h4" align="center" gutterBottom sx={{ color: '#FF5722', mb: 3 }}>
            Book a Table
          </Typography>
          <Grid container spacing={2}>
            {['name', 'email'].map((field) => (
              <Grid item xs={12} key={field}>
                <TextField
                  required
                  fullWidth
                  label={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  name={field}
                  type={field === 'email' ? 'email' : 'text'}
                  value={formData[field]}
                  onChange={handleChange}
                  variant="outlined"
                  error={!!errors[field]}
                  helperText={errors[field]}
                  sx={{ mb: 2 }}
                />
              </Grid>
            ))}
            {['date', 'time', 'guests'].map((field) => (
              <Grid item xs={12} sm={field === 'date' || field === 'time' ? 6 : 12} key={field}>
                <TextField
                  required
                  fullWidth
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  type={field === 'guests' ? 'number' : field}
                  value={formData[field]}
                  onChange={handleChange}
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  error={!!errors[field]}
                  helperText={errors[field]}
                  sx={{ mb: 2 }}
                />
              </Grid>
            ))}
          </Grid>
          <ButtonContainer>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ width: '48%', backgroundColor: '#FF5722', color: 'white', '&:hover': { backgroundColor: '#E64A19' } }}
            >
              Book Now
            </Button>
            <Button
              component={Link}
              to="/"
              variant="outlined"
              color="primary"
              sx={{ width: '48%', color: '#FF5722', borderColor: '#FF5722', '&:hover': { borderColor: '#E64A19', color: '#E64A19' } }}
            >
              Back to Home
            </Button>
          </ButtonContainer>
        </FormContainer>
      </BackgroundBox>
      <ToastContainer />
    </>
  );
}
