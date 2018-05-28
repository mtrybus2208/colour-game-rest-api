const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var helmet = require('helmet');
const morgan = require('morgan');

const resultsRoutes = require('./api/routes/results');

/* App Middleware */
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/results', resultsRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;

