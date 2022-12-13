const express = require('express');
const cors = require('cors');
const httpStatus = require('http-status');
const helmet = require('helmet');
const mongoose = require('mongoose');
const app = express();
const dotenv = require("dotenv");

// get config vars
dotenv.config();

app.set('trust proxy', true);

// parse body params and attache them to req.body
app.use(express.json());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());
//app.use('', routes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = { message: 'API not found', status: httpStatus.NOT_FOUND }
  return next(err);
})

const MONGOOSE_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

(async () => {
  try {
    await app.listen(process.env.PORT);
    console.log(`Listening to port ${process.env.PORT}`);
    await mongoose.connect(process.env.MONGODB_URL, MONGOOSE_OPTIONS);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(`Mongo Details: ${process.env.MONGODB_URL}`);
    console.log(error);
  }
})()
