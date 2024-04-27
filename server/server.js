// server.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
require("dotenv").config();
app.use(express.json());

// Replace this connection string with your MongoDB Atlas connection string
const mongoURI = `${process.env.mongoURI}`;
var cors = require('cors');
const { configDotenv } = require('dotenv');
app.use(cors())
app.use(cors({
    origin: ['http://localhost:5001',"https://ffg-lyart.vercel.app"]
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

app.get("/formData",async (req,res)=>{
  console.log("hi");
  const records=await FormData.find({});
  res.json(records);
})

// login logic 
//password=12345
//email=
const adminSchema = new mongoose.Schema({
    email: String,
    password: String,
  });
  
  adminSchema.pre("save", async function (next) {
    try {
      //if the user with given username already exists, throw an error.
      const existingUser = await this.model("Admin").findOne({
        email: this.email,
      });
      if (existingUser) {
        throw new Error("Username already exists");
      }
      //before saving the document, the secured password must be stored.
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(this.password, salt);
      console.log(hash)
      this.password = hash;
      next();
    } catch (error) {
      console.log(error);
      return next(error);
    }
  });

  const Admin = mongoose.model('Admin', adminSchema);

  app.post('/api/admin-register' , async(req,res)=>{
    const {email,password} = req.body;
    try {
      
      const newAdmin = await Admin.create({email,password});
      
      res.status(200).json({message:"Successfully created!",newAdmin});
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })

  app.get("/adminbaaji",async (req,res)=>{
    const records=await FormData.find({});
    res.json(records);
  })
  

  app.post('/api/admin-login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const admin = await Admin.findOne({ email });
      console.log(admin);
      if (!admin) {
        // alert("wrong credential");
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      // console.log(email);
      // console.log(admin.email);
      const passwordMatch = await bcrypt.compare(password, admin.password);
      console.log(passwordMatch);
      if (!passwordMatch) {
        // alert("wrong credential");
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const token = jwt.sign({ email: admin.email }, 'abcde');
      res.redirect(`/adminbaaji?token=${token}`);
      // res.json({ token });
    } catch (error) {
      // alert("wrong credential");
      console.error('Error during admin login:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});