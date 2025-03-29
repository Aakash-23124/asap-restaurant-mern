const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;
const bookTableRoutes = require('./routes/bookTable');
require('dotenv').config();

mongoose.connect('mongodb+srv://pvpsit:pvpsit@cluster0.nkxvmhp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

app.use(cors());
app.use(express.json());

app.use('/api/book-table', bookTableRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
