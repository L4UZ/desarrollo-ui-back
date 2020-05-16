import mongoose from 'mongoose';

export const reviewSchema = new mongoose.Schema({
  placeId: { type: String, index: true },
  comment: String,
  score: Number,
  userEmail: String,
  userFullName: String,
});

export const ReviewModel = mongoose.model('Review', reviewSchema);
