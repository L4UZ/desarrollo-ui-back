import mongoose from 'mongoose';

export const placeSchema = new mongoose.Schema({
  regionId: { type: String, index: true },
  name: String,
  description: String,
  imagesSrc: [String],
});

export const PlaceModel = mongoose.model('Place', placeSchema);
