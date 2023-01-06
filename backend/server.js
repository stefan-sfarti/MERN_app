const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.use('/api/todo', require('./routes/todoRoutes'))

app.listen(port, () => console.log(`Server is running on port ${port}`))

