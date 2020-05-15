import mongoose from 'mongoose';

export const placeSchema = new mongoose.Schema({
  name: String,
  description: String,
  imagesSrc: [String],
  activityIds: [String],
  reviewIds: [String],
});

export const PlaceModel = mongoose.model('Place', placeSchema);
