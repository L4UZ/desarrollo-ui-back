import mongoose from 'mongoose';

export const placeSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  imagesSrc: [String],
  regionIds: [String],
});

placeSchema.index({ location: '2dsphere' });

export const PlaceModel = mongoose.model('Place', placeSchema);
