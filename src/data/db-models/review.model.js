import mongoose from 'mongoose';

export const reviewSchema = new mongoose.Schema({
  name: String,
});

export const ReviewModel = mongoose.model('Review', reviewSchema);
