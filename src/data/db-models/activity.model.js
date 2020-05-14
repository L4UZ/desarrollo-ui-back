import mongoose from 'mongoose';

export const activitySchema = new mongoose.Schema({
  name: String,
});

export const ActivityModel = mongoose.model('Activity', activitySchema);
