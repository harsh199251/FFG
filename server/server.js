// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Replace this connection string with your MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://harshjain49251:BrdnDpo48jWiWQWc@cluster0.5ik1urx.mongodb.net/?retryWrites=true&w=majority';
var cors = require('cors');
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
    age: String,
    email: String,
    phone: String,
});

const FormData = mongoose.model('FormData', formDataSchema);

app.post('/api/saveFormData', async (req, res) => {
    const { name, age, email, phone } = req.body;

    try {
        const formData = new FormData({ name, age, email, phone });
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
