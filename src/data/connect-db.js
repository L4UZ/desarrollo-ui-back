/* eslint-disable no-console */
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.info('Database connected successfully');
  } catch (err) {
    throw new Error('DATABASE CONNECTION ERROR: ', err);
  }
};

export default connectDB;
