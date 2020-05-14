import mongoose from 'mongoose';
import { regionSchema } from './region.model';

export const continentSchema = new mongoose.Schema({
  name: String,
  regions: [regionSchema],
});

export const ContinentModel = mongoose.model('Continent', continentSchema);
