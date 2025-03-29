import React from 'react';
import { Container, Typography, Paper, IconButton, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LocalDining, Fastfood, Cake, LocalBar } from '@mui/icons-material';

const StyledContainer = styled(Container)({
    padding: '32px',
    backgroundColor: '#fff8f0',
    minHeight: '80vh',
});

const SectionTitle = styled(Typography)({
    margin: '32px 0',
    fontWeight: 'bold',
    color: '#e64a19',
    textAlign: 'center',
    fontSize: '2rem',
    textTransform: 'uppercase',
    borderBottom: '2px solid #e64a19',
    paddingBottom: '8px',
});

const MenuColumn = styled(Paper)({
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    border: '1px solid #e64a19',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.4)',
    },
});

const IconWrapper = styled(IconButton)({
    color: '#e64a19',
    marginBottom: '8px',
    fontSize: '2rem',
});

const sections = [
    { title: 'Starters', items: ['Samosa ₹50', 'Spring Rolls ₹60', 'Hummus ₹80', 'Cheese Balls ₹90', 'Onion Rings ₹70', 'Stuffed Mushrooms ₹100', 'Vegetable Pakora ₹80'], icon: LocalDining },
    { title: 'Main Course', items: ['Paneer Butter Masala ₹150', 'Dal Makhani ₹130', 'Vegetable Biryani ₹180', 'Vegetable Korma ₹140', 'Palak Paneer ₹160', 'Chana Masala ₹140', 'Aloo Gobi ₹130'], icon: Fastfood },
    { title: 'Desserts', items: ['Gulab Jamun ₹80', 'Jalebi ₹70', 'Ras Malai ₹90', 'Kheer ₹75', 'Chocolate Mousse ₹100', 'Fruit Custard ₹85', 'Paneer Tikka ₹120'], icon: Cake },
    { title: 'Beverages', items: ['Lassi ₹60', 'Mango Smoothie ₹70', 'Cold Coffee ₹80', 'Masala Chai ₹50', 'Green Tea ₹40', 'Buttermilk ₹55', 'Mint Lemonade ₹65'], icon: LocalBar },
];

const MenuPage = () => (
    <StyledContainer>
        {sections.map(({ title, items, icon: Icon }, idx) => (
            <div key={idx}>
                <SectionTitle>{title}</SectionTitle>
                <Grid container spacing={2}>
                    {items.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <MenuColumn>
                                <IconWrapper>
                                    <Icon />
                                </IconWrapper>
                                <Typography variant="h6">{item.split(' ')[0]}</Typography>
                                <Typography variant="body1" color="textSecondary">
                                    {item.split(' ')[1]}
                                </Typography>
                            </MenuColumn>
                        </Grid>
                    ))}
                </Grid>
            </div>
        ))}
    </StyledContainer>
);

export default MenuPage;
