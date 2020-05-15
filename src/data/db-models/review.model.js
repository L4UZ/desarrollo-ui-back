import mongoose from 'mongoose';

export const reviewSchema = new mongoose.Schema({
  comment: String,
  score: Number,
});

export const ReviewModel = mongoose.model('Review', reviewSchema);
