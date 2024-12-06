require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.APP_PORT || 5000;

// Routes
require('./app/routes/user.routes');
// app.get('/about', (req, res) => { 
//     res.send('About');
// });

app.listen(PORT, () => console.log('Server is running ' + PORT));