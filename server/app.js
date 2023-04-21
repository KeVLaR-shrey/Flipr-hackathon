const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const mongoUsername = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASS;
const mongoConnectionString = process.env.MONGO_CONNECTION_STRING;

const connectionString = mongoConnectionString
  .replace('<username>', mongoUsername)
  .replace('<password>', mongoPassword);

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.get('/', (req, res) => {
  res.send('Hello, Podcast Webapp!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
