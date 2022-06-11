const express = require('express');
const mongoose = require('mongoose');
const classeRouter = require('./classes/routes');
const studentRouter = require('./students/routes');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://hasalp:viGE3TOi1TwdW9JJ@cluster0.sdpr1.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use('/api/classe',classeRouter);
app.use('/api/student',studentRouter);






module.exports = app;