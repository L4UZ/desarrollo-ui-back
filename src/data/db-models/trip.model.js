import mongoose from 'mongoose';

export const tripSchema = new mongoose.Schema({
  name: String,
  userId: String,
  places: [
    {
      placeId: String,
      regionId: String,
    },
  ],
});

export const TripModel = mongoose.model('Trip', tripSchema);
