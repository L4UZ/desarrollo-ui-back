/* eslint-disable no-underscore-dangle */
import { ReviewModel, PlaceModel } from '../data';

export const reviewsResolvers = {
  Mutation: {
    addReview: async (_, { review: { comment, score, placeId } }) => {
      const [addedReview] = await ReviewModel.insertMany([{ comment, score }]);
      await PlaceModel.findByIdAndUpdate(placeId, {
        $push: { reviewIds: addedReview._id },
      });
      return addedReview;
    },
  },
};
