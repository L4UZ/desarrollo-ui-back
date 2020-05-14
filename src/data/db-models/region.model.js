import mongoose from 'mongoose';

export const regionSchema = new mongoose.Schema({
  name: String,
  imageSrc: String,
  placeIds: [String],
});

export const RegionModel = mongoose.model('Region', regionSchema);
