import mongoose from 'mongoose';

export const placeSchema = new mongoose.Schema({
  name: String,
});

export const PlaceModel = mongoose.model('Place', placeSchema);
