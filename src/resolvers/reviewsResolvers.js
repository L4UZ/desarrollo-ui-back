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

        const reviews = await ReviewModel.find({ placeId });

        const overallScore =
          reviews.reduce((acc, { score: reduceScore }) => acc + reduceScore, 0) / reviews.length;

        return { ...addedReview._doc, id: addedReview._doc._id, overallScore };
      } catch (err) {
        return err;
      }
    },
  },
};
