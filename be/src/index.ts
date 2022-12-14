import express from 'express';
import cors from 'cors';
import httpStatus from 'http-status';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/routes'

const app = express();
const MONGOOSE_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

dotenv.config();

app.use(express.json());
app.use(cors());
app.use('', routes);


(async () => {
    try {
      await app.listen(process.env.PORT);
      console.log(`Listening to port ${process.env.PORT}`);
      mongoose.set("strictQuery", false);
      await mongoose.connect(process.env.MONGODB_URL, ()=>{
        console.log('Connected to MongoDB');
      });
    } catch (error) {
      console.log(`Mongo Details: ${process.env.MONGODB_URL}`);
      console.log(error);
    }
})()