/* eslint-disable no-underscore-dangle */
import { ReviewModel } from '../data';
import { authFilter } from '../logic/session';

export const reviewsResolvers = {
  Mutation: {
    addReview: async (_, { review: { token, comment, score, placeId } }) => {
      try {
        const { user } = await authFilter(token);
        const [addedReview] = await ReviewModel.insertMany([
          {
            placeId,
            comment,
            score,
            userEmail: user.email,
            userFullName: `${user.firstName} ${user.lastName}`,
          },
        ]);
        return addedReview;
      } catch (err) {
        return err;
      }
    },
  },
};
