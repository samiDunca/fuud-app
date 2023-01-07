const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const recipeRouter = require('./routes/recipeRoutes');

const app = express();
//comment
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//custom routers
app.use('/api/v1/recipe', recipeRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`));
});

module.exports = app;
