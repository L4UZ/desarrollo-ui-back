import mongoose from 'mongoose';

export const regionSchema = new mongoose.Schema({
  continentId: { type: String, index: true },
  name: String,
  imageSrc: String,
});

export const RegionModel = mongoose.model('Region', regionSchema);
