import mongoose from 'mongoose';

export const tripSchema = new mongoose.Schema({
  name: String,
  userId: String,
  placeIds: [String],
});

export const TripModel = mongoose.model('Trip', tripSchema);
