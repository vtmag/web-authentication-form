const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST route for user sign up
router.post('/signup', async (req, res) => {
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        
        // Create new user
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        await newUser.save();
        
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// POST route for user login
router.post('/login', async (req, res) => {
    try {
        // Find user by email and password
        const user = await User.findOne({ email: req.body.email, password: req.body.password });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
