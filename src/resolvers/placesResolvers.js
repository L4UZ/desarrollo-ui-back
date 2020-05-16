import { PlaceModel, ActivityModel, ReviewModel } from '../data';

export const placesResolvers = {
  Query: {
    place: (_, { id }) => PlaceModel.findById(id),
  },

  Place: {
    activities: ({ activityIds }) => ActivityModel.find({ _id: { $in: activityIds } }),
    reviews: ({ reviewIds }) => ReviewModel.find({ _id: { $in: reviewIds } }),
    overallScore: async ({ reviewIds }) => {
      const reviews = await ReviewModel.find({ _id: { $in: reviewIds } });
      const result = reviews.reduce((acc, { score }) => acc + score, 0) / reviews.length;
      return result;
    },
  },
};
