import mongoose from 'mongoose';

export const continentSchema = new mongoose.Schema({
  name: String,
});

export const ContinentModel = mongoose.model('Continent', continentSchema);
