import mongoose from 'mongoose';

export const activitySchema = new mongoose.Schema({
  placeId: { type: String, index: true },
  name: String,
  price: Number,
});

export const ActivityModel = mongoose.model('Activity', activitySchema);
