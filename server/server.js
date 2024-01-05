// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
require("dotenv").config();
app.use(express.json());

// Replace this connection string with your MongoDB Atlas connection string
const mongoURI = `${process.env.mongoURI}`;
var cors = require('cors');
const { configDotenv } = require('dotenv');
app.use(cors())
app.use(cors({
    origin: 'http://localhost:5001'
  }));

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

const formDataSchema = new mongoose.Schema({
    name: String,
    purpose: String,
    age: String,
    email: String,
    phone: String,
});

const FormData = mongoose.model('FormData', formDataSchema);

app.post('/api/saveFormData', async (req, res) => {
    const { name,purpose, age, email, phone } = req.body;

    try {
        const formData = new FormData({ name, purpose,age, email, phone });
        await formData.save();
        res.status(200).json({ message: 'Form data saved successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving form data.' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
