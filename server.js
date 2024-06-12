// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const User = require('./models/User'); // Import the User model
const Realm = require('realm');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB Realm App ID
const appId = "application-0-lepelxo"; // Replace with your MongoDB Realm app ID
const client = new Realm.App({ id: appId });

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://magdavitsioti:magda@cluster0.gr1ftci.mongodb.net/Login?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true  
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
});

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Register user with MongoDB Realm
        await client.emailPasswordAuth.registerUser({ email, password });

        // Create a new database user
        const newUser = await User.create({ name, email, password });
        console.log('User created:', newUser);
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Authenticate user with MongoDB Realm
        const credentials = Realm.Credentials.emailPassword(email, password);
        const user = await client.logIn(credentials);

        // Find user by email
        const dbUser = await User.findOne({ email });

        // Check if user exists in the local database
        if (!dbUser) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Password is correct, login successful
        res.status(200).json({ message: 'Login successful', user: dbUser });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(401).json({ message: 'Invalid email or password', error: error.message });
    }
});

// Routes
app.use('/api/auth', authRoutes);
const path = require('path');

app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
