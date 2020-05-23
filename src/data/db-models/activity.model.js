import mongoose from 'mongoose';

export const activitySchema = new mongoose.Schema({
  placeId: { type: String, index: true },
  name: String,
  price: Number,
  description: String,
});

export const ActivityModel = mongoose.model('Activity', activitySchema);
