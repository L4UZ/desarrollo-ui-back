import mongoose from 'mongoose';

export const placeSchema = new mongoose.Schema({
  name: String,
  description: String,
  imagesSrc: [String],
  regionIds: [String],
});

export const PlaceModel = mongoose.model('Place', placeSchema);
