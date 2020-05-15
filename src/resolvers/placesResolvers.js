import { PlaceModel, ActivityModel, ReviewModel } from '../data';

export const placesResolvers = {
  Query: {
    place: (_, { id }) => PlaceModel.findById(id),
  },

  Place: {
    activities: ({ activityIds }) => ActivityModel.find({ _id: { $in: activityIds } }),
    reviews: ({ reviewIds }) => ReviewModel.find({ _id: { $in: reviewIds } }),
  },
};
