/* eslint-disable no-underscore-dangle */
import { ReviewModel, PlaceModel } from '../data';
import { authFilter } from '../logic/session';

export const reviewsResolvers = {
  Mutation: {
    addReview: async (_, { review: { token, comment, score, placeId } }) => {
      try {
        await authFilter(token);
        const [addedReview] = await ReviewModel.insertMany([{ comment, score }]);
        await PlaceModel.findByIdAndUpdate(placeId, {
          $push: { reviewIds: addedReview._id },
        });
        return addedReview;
      } catch (err) {
        return err;
      }
    },
  },
};
